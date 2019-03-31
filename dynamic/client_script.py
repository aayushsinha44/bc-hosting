#!/usr/bin/env python
import pika
import requests
import json
import os
import jwt
import json
import subprocess

MQ_IP = '192.168.43.59'
RESPONSE_RECEIVER = 'http://192.168.43.59:4000'
GATEWAY = 'http://192.168.43.59:8000'

cred = pika.PlainCredentials('test', 'test')
connection = pika.BlockingConnection(
    pika.ConnectionParameters(MQ_IP, 5672, "/", cred))
channel = connection.channel()

channel.exchange_declare(exchange='messages', exchange_type='fanout')

result = channel.queue_declare('', exclusive=True)
queue_name = result.method.queue

channel.queue_bind(exchange='messages', queue=queue_name)

def system_setup():
	os.system('sudo apt-get update')
	os.system('sudo apt-get install python3')

system_setup()

print("Enter your name:", end="")
NAME = input()

print(' [*] Waiting for messages. To exit press CTRL+C')

def function_api(id):
	url = GATEWAY+'/function/'+str(id)+'/'
	res = requests.get(url)
	res = json.loads(res.text)
	return res

def set_directory_structure(res):
	os.system('rm -rf /tmp/'+str(res["function"][0]["id"]))
	for r in res["data"]:
		if not os.path.isdir('/tmp/'+str(res["function"][0]["id"])+r["parent"]):
			os.system('mkdir /tmp/'+str(res["function"][0]["id"])+r["parent"])
		code = r["code"]
		name = r["name"]

		f = open('/tmp/'+str(res["function"][0]["id"])+r["parent"]+name, 'w')
		f.write(code)
		f.close()

def add_file(res, event):
	
	for r in res["data"]:

		if r["is_starting"]:
			name = r["name"]
			f1 = open('/tmp/'+str(res["function"][0]["id"])+r["parent"]+name, 'r')
			f = open('/tmp/'+str(res["function"][0]["id"])+r["parent"]+name, 'a')
			f.write("\n\ndef get_data_from_handler(event):\n\treturn handler(event)\n\n")
			f.close()
			f1.close()


			path = '/tmp/'+str(res["function"][0]["id"])+r["parent"]+'ajsoefjosefjsoa.py'
			path_start = '/tmp/'+str(res["function"][0]["id"])+r["parent"]+name

			f = open(path, 'w')

			
			main_py = "from "+name.split('.')[0]+" import get_data_from_handler\n"
			event_str = json.dumps(event)
			main_py += "event="+event_str+"\n\n"+"print(get_data_from_handler(event))\n"

			f.write(main_py)
			f.close()
			return path

def execute(path):
	proc=subprocess.Popen('python3 '+path, stdout=subprocess.PIPE, shell=True)
	out = proc.stdout.read()
	return out


def hit_response_api(token, response):
	response = response.decode()
	body = {
		"token": token,
		"response": response,
		"id": NAME
	}
	url = RESPONSE_RECEIVER+'/send_response/'
	res = requests.get(url, json=body)
	res = json.dumps(res.text)
	print("Completed")
	return res

def callback(ch, method, properties, body):
	print('Received Request')
	body = json.loads(body.decode())
	token = body["token"]

	jwt_string = jwt.decode(token, "asfjoew@23r8wjfosdfn", algorithms=['HS256'])
	function_id = jwt_string["function_id"]
	address = jwt_string["address"]
	request_number = jwt_string["request_number"]
	event = (jwt_string["event"])

	# call function api
	res_fun = function_api(function_id)

	# make directory structure
	set_directory_structure(res_fun)

	# add file
	path = add_file(res_fun, event)

	# Execute
	response = execute(path)
	# hit with response api
	hit_response_api(token, response)

channel.basic_consume(
    queue=queue_name, on_message_callback=callback, auto_ack=True)

channel.start_consuming()

