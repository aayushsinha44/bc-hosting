import threading
from gateway.models import FunctionModel, FunctionCodeModel
from django.shortcuts import render
from django.http import HttpResponse
import time
import json
import pika
import jwt

request_number = 0
response_list = []
thread_fired = False


# Create your views here.
def get_response(request, address, function_id):
    global request_number, response_list, thread_fired

    res = json.loads(request.body.decode())
    event = res["event"]

    token = jwt.encode({'function_id': function_id,
                        'address': address,
                        'event': event,
                        'request_number': request_number}, 'asfjoew@23r8wjfosdfn', algorithm='HS256')
    request_number += 1
    broadcast_message({"token": token.decode(), "id": function_id})

    # broadcast
    if not thread_fired:
        threading.Thread(name='t1', target=start_listening_from_response).start()
        thread_fired = True

    print(request_number)

    while True:
        for i in range(len(response_list)):
            if response_list[i]["request_number"] == request_number - 1:
                print("found")
                return HttpResponse(json.dumps(response_list[i]), content_type='application/json')


def callback(ch, method, properties, body):
    print(" [x] Received %r" % body)
    global response_lists
    response_list.append(json.loads(body.decode()))


def start_listening_from_response():
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()

    channel.queue_declare(queue='hello')
    channel.basic_consume(
        queue='hello', on_message_callback=callback, auto_ack=True)

    print(' [*] Waiting for messages. To exit press CTRL+C')
    channel.start_consuming()


def broadcast_message(message):
    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()

    channel.exchange_declare(exchange='messages', exchange_type='fanout')

    channel.basic_publish(exchange='messages', routing_key='', body=str(json.dumps(message)))

    connection.close()


def check_function(request):
    pass


def add_function(request):
    # get alias
    # add function

    req = json.loads(request.body.decode())

    name = req["name"]
    user_address = req["user_address"]

    FunctionModel.objects.create(name=name, user_address=user_address)

    try:
        function_codes = req["function_code"]
        function_object = FunctionModel.objects.get(name=name, user_address=user_address)

        for function_code in function_codes:
            is_starting = function_code["is_starting"]
            name = function_code["name"]
            code = function_code["code"]
            parent = function_code["parent"]
            FunctionCodeModel.objects.create(function=function_object,
                                             is_starting=is_starting,
                                             name=name,
                                             parent=parent,
                                             code=code)

    except Exception as e:
        print(str(e))

    return HttpResponse(json.dumps({"message": "added"}), content_type='application/json')


def function(request, id):
    if request.method == 'GET':
        print(id)
        functionModelObject = FunctionModel.objects.get(id=id)
        functionCodeModelObject = list(FunctionCodeModel.objects.filter(function=functionModelObject).values())

        return HttpResponse(json.dumps({
            "function": list(FunctionModel.objects.filter(id=id).values()),
            "data": functionCodeModelObject
        }), content_type='application/json')


def update_function(request):
    req = json.loads(request.body.decode())
    id = req["id"]
    user_address = req["user_address"]

    try:
        function_codes = req["function_code"]

        for function_code in function_codes:
            function_object = FunctionModel.objects.get(id=id, user_address=user_address)
            function_code_object = FunctionCodeModel.objects.get(id=function_code["id"], function=function_object)
            function_code_object.is_starting = function_code["is_starting"]
            function_code_object.name = function_code["name"]
            function_code_object.code = function_code["code"]
            function_code_object.save()

    except Exception as e:
        pass

    return HttpResponse(json.dumps({"message": "added"}), content_type='application/json')


def get_all_function(request, address):
    functionModelObject = FunctionModel.objects.get(user_address=address)
    functionCodeModelObject = list(FunctionCodeModel.objects.filter(function=functionModelObject).values())

    return HttpResponse(json.dumps({
        "function": list(FunctionModel.objects.filter(id=id).values()),
        "data": functionCodeModelObject
    }), content_type='application/json')
