from django.shortcuts import render
from django.http import HttpResponse, HttpResponseBadRequest
import json
import pika
import json
import jwt


# Create your views here.
def response_received(request):

    res = json.loads(request.body.decode())

    connection = pika.BlockingConnection(
        pika.ConnectionParameters(host='localhost'))
    channel = connection.channel()

    channel.queue_declare(queue='hello')

    try:
        jwt_string = jwt.decode(res["token"], "asfjoew@23r8wjfosdfn", algorithms=['HS256'])
    except Exception as e:
        return HttpResponseBadRequest(json.dumps({
            "message": "invalid token"
        }), content_type='application/json')

    data = res["response"]
    print(jwt_string)
    request_number = (jwt_string["request_number"])

    body = {"request_number": request_number, "response": data, "id": res["id"]}
    channel.basic_publish(exchange='', routing_key='hello', body=json.dumps(body))

    connection.close()

    # send stop broadcast

    # pay user

    return HttpResponse("Success")
