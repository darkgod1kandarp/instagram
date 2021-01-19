from django.db import models

# Create your models here.
class Name1(models.Model):
    username1 = models.CharField(max_length = 25,unique = True)
class iddistribution(models.Model):
    name1 = models.ForeignKey(Name1,on_delete=models.CASCADE)
    id_name = models.CharField(max_length = 10,unique = True)
class login(models.Model):
    name1 =  models.ForeignKey(Name1, on_delete=models.CASCADE)
    password1 = models.CharField(max_length = 200)
    email1 = models.EmailField(max_length = 200,unique = True)
class description(models.Model):
    name1 =  models.ForeignKey(Name1, on_delete=models.CASCADE)
    descript = models.CharField(max_length = 1000)
class hobby(models.Model):
    name1 = models.ForeignKey(Name1,on_delete = models.CASCADE)
    hobby1 = models.IntegerField()
    hobby2 = models.IntegerField()
    hobby3 = models.IntegerField()
    hobby4 = models.IntegerField()
    hobby5 = models.IntegerField()

class pipctures(models.Model):
    images = models.ImageField(upload_to='images/',blank=True, null=True)
    name1 = models.ForeignKey(Name1,on_delete=models.CASCADE)
class Tagged(models.Model):
    box = models.IntegerField()
class learn(models.Model):
    name1 = models.ForeignKey(Name1,on_delete = models.CASCADE)
    latitude1 = models.FloatField()
    longitude1 = models.FloatField()
    tag = models.ForeignKey(Tagged,on_delete =models.CASCADE)
class birth(models.Model):
    name1 = models.ForeignKey(Name1,on_delete = models.CASCADE)
    date1 = models.DateField()

