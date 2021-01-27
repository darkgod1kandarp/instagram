from django.shortcuts import render
from django.http import HttpResponse,JsonResponse
from rest_framework.parsers import JSONParser
from .models import login,hobby,learn,Name1,iddistribution,pictures,Tagged,description,birth
from.serializer import loginserializer
from django.views.decorators.csrf import csrf_exempt
import smtplib
import math
import random
import datetime
import base64
import io
from PIL import Image
from django.core.files.uploadedfile import InMemoryUploadedFile
def decodeDesignImage(data):
    try:
        data = base64.b64decode(data.encode('UTF-8'))
        buf = io.BytesIO(data)
        img = Image.open(buf)
        return img
    except:
        return None
from django.core.files import File
otp = False
def generateOTP():
    digits = "0123456789"
    OTP = ""
    for i in range(6):
        OTP += digits[math.floor(random.random() * 10)]
    return OTP
def emailsending(c, l):
    fromaddr = 'boss1117899@gmail.com'
    toaddrs = c
    msg = 'your otp is '+str(l)
    username = 'boss1117899@gmail.com'
    password = 'boss@1234'
    server = smtplib.SMTP('smtp.gmail.com:587')
    server.ehlo()
    server.starttls()
    server.login(username, password)
    server.sendmail(fromaddr, toaddrs, msg)
    server.quit()
@csrf_exempt
def login_list(request):
    if request.method=="GET":
        login1 = login.objects.all()
        
        return JsonResponse(login1.data,safe=False)
    elif request.method=='POST':
        print(request)
        data = JSONParser().parse(request)
        print(data['email1'])
        try:
            k = data['name1'] 
            name_checking = Name1.objects.get(username1 = k)

            sending = {'error':'already exist name'}
            
            return JsonResponse(sending,status = 200)
            
        except:
            try:
                f = data['email1'] 
                first = login.objects.get(email1 = f)
                sending = {'error':'already exist email'}
                return JsonResponse(sending,status = 200)
            except:

                norm = ""
                for i in range(3):
                    norm+=str(chr(random.randint(65,91)))
                for i in range(3):
                    norm+=str(random.randint(0,9))
                name1 = Name1.objects.create(username1 = k)
                sending  = {'error' : 'none','id':norm}
                
                tag1 = Tagged.objects.all()
                x = data['latitude1']
                y = data['longitude1']
                case = False
                name12 = Name1.objects.get(username1 = data['name1'])
                for i in tag1:
                    data1 = i
                    checking =  learn.objects.filter(tag = data1)
                    fup = checking[0]
                    up = fup.latitude1 - 0.15
                    down = fup.latitude1 +0.15
                    right = fup.longitude1 - 0.15
                    left = fup.longitude1 + 0.15
                    if up<=x<=down and  right<=y<=left:
                        case =  True
                        id_create = iddistribution.objects.create(id_name = norm ,name1 = name1)
                        login1 = login.objects.create(name1 = name1,password1 = data['password1'],email1 = data['email1'])
                        learn.objects.create(name1 =name12,latitude1 = data['latitude1'],longitude1 = data['longitude1'],tag = data1)
                        break
                count = 0
                if not case:
                    tag1 = Tagged.objects.all()
                    for i in tag1:
                        count = i.box
                    count+=1
                    tagging = Tagged.objects.create(box = count)
                    id_create = iddistribution.objects.create(id_name = norm ,name1 = name1)
                    login1 = login.objects.create(name1 = name1,password1 = data['password1'],email1 = data['email1'])
                    learn.objects.create(name1 =name12,latitude1 = data['latitude1'],longitude1 = data['longitude1'],tag = tagging)
                return JsonResponse(data,safe=False)
              
            
@csrf_exempt
def checking(request):
    if request.method=="POST":
        data = JSONParser().parse(request)
        
        
        try:
            checking_email = login.objects.get(email1 = data['email1'])
            username1 = checking_email.name1.username1
            data1 = {'email1':data['email1'],'username1':username1}
            checking_password = login.objects.get(password1 = data['password1'])
            return JsonResponse(data1,status =201)
        except:
            return JsonResponse(data,status = 400)
    
emaily = False
@csrf_exempt
def send_email(request):
    if request.method=="POST":
        data = JSONParser().parse(request)
        try:
            global emaily
            def emaily():
                return data['email1']
            check_email = login.objects.get(email1 = data['email1'])
            
            print(1)
            f = generateOTP()
            global otp
            def otp():
                return f
            op = {'otp':f,'email1':data['email1']}
           
            emailsending(data['email1'],f)
            print(2)
            return JsonResponse(op,status = 200)
            
        except:
            return JsonResponse(data,status = 403)
@csrf_exempt            
def check_otp(request):
    if request.method=="POST":
        
        check_email = login.objects.get(email1 = emaily())
        data = {'name1':check_email.name1.username1}
        f = otp()
        if f==data1['OTP1']:
            return JsonResponse(data,status = 202)
        else:
            return JsonResponse(data,status = 401)
@csrf_exempt   
def image_storing(request):
    if request.method=="POST":
        data1 = JSONParser().parse(request)
        image = data1['url'].split(",")
        with open("1.txt",'w') as file:
            file.write(image[1])
        with open("1.txt",'rb') as fw:
            with open('media/images/image1.png','wb') as fh:
                fh.write(base64.decodebytes(fw.read()))
        name1 = Name1.objects.get(username1 = data1['name1'])
        one  = pictures.objects.create(images = "../media/images/image1.png",name1 = name1)
        url = one.images.url;
        print(url)
        sending = {"error":"done",'url':url}
        return JsonResponse(sending,status =200 )
@csrf_exempt 
def checking_image(request):
    if request.method=="POST":
        name1 = Name1.objects.get(username1 = request.POST['name1'])
        one  = pictures.objects.get(name1 = name1)
        url = one.images.url
        data = {'url':url}
        return JsonResponse(data,status =200)
@csrf_exempt
def getInfo(request):
    if request.method=="POST":
        data = JSONParser().parse(request)
        print(data)
        hobb = data['hobbies']
        name1 = Name1.objects.get(username1 =data['name1'])
        description.objects.create(name1 = name1,descript = data['description'])
        hobby.objects.create(name1 = name1,hobby1 = hobb[0],hobby2 = hobb[1],hobby3 = hobb[2],hobby4 = hobb[3],hobby5 = hobb[4])
        birth.objects.create(name1 = name1,date1 =  data['dob'])
        return JsonResponse(data,status = 200)
@csrf_exempt
def view(request):
    if request.method=="POST":
        data = JSONParser().parse(request)
        print(data)
        tag1 = Tagged.objects.all()
        print(tag1)
        x = data['latitude1']
        y = data['longitude1']
        case = False
        name12 = Name1.objects.get(username1 = data['name1'])
        print(name12)
        for i in tag1:
            data1 = i
            checking =  learn.objects.filter(tag = data1)
            fup = checking[0]
            up = fup.latitude1 - 0.15
            down = fup.latitude1 +0.15
            right = fup.longitude1 - 0.15
            left = fup.longitude1 + 0.15
            if up<=x<=down and  right<=y<=left:
                case =  True
                complete = learn.objects.filter(tag = data1)
                
                dict_overall = {}
                top = 0
                for i in complete:
                    array = []
                    top +=1
                    f = hobby.objects.get(name1 = i.name1)
                    if f.hobby2==1:
                        array.append("hobby1")
                    if f.hobby2==1:
                        array.append("hobby2")
                    if  f.hobby3==1:
                        array.append("hobby3")
                    if f.hobby4==1:
                        array.append("hobby4")
                    if f.hobby5==1:
                        array.append("hobby5")
                    f = description.objects.get(name1 = i.name1)
                    desc = f.descript
                    f = pictures.objects.get(name1 = i.name1)
                    ima = f.images.url
                    name = i.name1.username1
                    dict1 = {"image":ima,"description":desc,"hobby":array,"name":name}
                    dict_overall[top] = dict1
                updating = learn.objects.get(name1 =name12)
                updating.latitude1 = data['latitude1']
                updating.longitude1 = data['longitude1']
                updating.tag = data1
                updating.save()
                break
        count = 0
        if not case:
            tag1 = Tagged.objects.all()
            for i in tag1:
                count = i.box
            count+=1
            dict_overall = {"NWST"}
            tagging = Tagged.objects.create(box = count)
            updating = learn.objects.get(name1 =name12)
            updating.latitude1 = data['latitude1']
            updating.longitude1 = data['longitude1']
            updating.tag = tagging
            updating.save()
        print(dict_overall)
        return JsonResponse(dict_overall,status = 200)
@csrf_exempt 
def getting_user_info(request):
    data = JSONParser().parse(request)
    name12 = Name1.objects.get(username1 = data['name1'])
    pass_email = login.objects.get(name1 = name12)
    descrpt = description.objects.get(name1 = name12)
    f = hobby.objects.get(name1 = name12)
    array = []
    if f.hobby2==1:
        array.append("hobby1")
    if f.hobby2==1:
        array.append("hobby2")
    if  f.hobby3==1:
        array.append("hobby3")
    if f.hobby4==1:
        array.append("hobby4")
    if f.hobby5==1:
        array.append("hobby5")
    bir = birth.objects.get(name1 = name12)
    one  = pictures.objects.get(name1 = name12)
    url = one.images.url;
    
    data1= {"name1":name12.username1,"email1":pass_email.email1,'password':pass_email.password1,"description":descrpt.descript,"hobby":array,"DOB":bir.date1,'url':url}

    return JsonResponse(data1,status = 200)
    

                
            
      
