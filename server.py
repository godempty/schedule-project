from flask import Flask, redirect, render_template, request, url_for
import pymongo
app = Flask(__name__)
true = True
myclient = pymongo.MongoClient('mongodb+srv://godempty:momo0305@cluster0.xshvh.mongodb.net/?retryWrites=true&w=majority',tls=True,tlsAllowInvalidCertificates=True)
mydb = myclient['Schedule']
mycollection = mydb['collection']

@app.route('/schedule', methods=['POST','GET'])
def show():
    datas = request.args.get('datas',None)
    if request.method=='POST':
        print(datas)
        print(request.data)
        print(request.data.decode("UTF-8"))
        print(request.data.decode("UTF-8")[1])
        print(request.data.decode("UTF-8")[2])
        if datas:
            print('we get data!')
            mycollection.insert_one(datas)
        return render_template("index.html")
    if request.method=='GET':
        return render_template("index.html")

if __name__ == "__main__":
    app.run(port='3060', debug=True)