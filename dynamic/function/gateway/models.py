from django.db import models


# Create your models here.
class FunctionModel(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.TextField(max_length=255)
    user_address = models.TextField(max_length=255)

    def __str__(self):
        return str(self.id)


class FunctionCodeModel(models.Model):
    function = models.ForeignKey(FunctionModel, on_delete=models.CASCADE)
    is_starting = models.BooleanField()
    code = models.TextField()
    name = models.CharField(max_length=100)
    parent = models.CharField(max_length=100)

    def __str__(self):
        return str(self.id)


class UserModel(models.Model):
    user_address = models.TextField(max_length=255)
    eth_amount = models.FloatField()

    def __str__(self):
        return self.user_address
