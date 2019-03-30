from django.urls import re_path
from .views import get_response, add_function, function, update_function, get_all_function, check_function

urlpatterns = [
    re_path(r'^get_response/(?P<address>\w{0,250})/(?P<function_id>\w{0,250})/$', get_response),
    re_path(r'^check_function/(?P<address>\w{0,250})/(?P<function_name>\w{0,250})/$', check_function),
    re_path(r'^add_function/$', add_function),
    re_path(r'^function/(?P<id>\w{0,250})/$', function),
    re_path(r'^get_all_function/(?P<address>\w{0,250})/$', get_all_function),
    re_path(r'^update_function/$', update_function),
]
