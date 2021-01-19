from rest_framework import serializers
from.models import login
class loginserializer(serializers.ModelSerializer):
    class Meta:
       model = login
       fields = ['name1','password1','email1']
