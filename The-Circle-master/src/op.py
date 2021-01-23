import base64
with open('1.txt','rb') as file:
    with open('image145.png','wb') as fh:
        fh.write(base64.decodebytes(file.read()))