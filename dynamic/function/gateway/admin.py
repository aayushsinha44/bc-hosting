from django.contrib import admin
from .models import FunctionCodeModel, FunctionModel, UserModel

# Register your models here.
admin.site.register(FunctionModel)
admin.site.register(FunctionCodeModel)
admin.site.register(UserModel)