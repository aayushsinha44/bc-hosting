from django.urls import re_path
from .views import response_received

urlpatterns = [
    re_path(r'^send_response/$', response_received)
]
