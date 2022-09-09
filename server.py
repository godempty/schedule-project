from flask import Flask, redirect, render_template, request, url_for
import pymongo
app = Flask(__name__)
true = True
myclient = pymongo.MongoClient('mongodb+srv://godempty:momo0305@cluster0.xshvh.mongodb.net/?retryWrites=true&w=majority',tls=True,tlsAllowInvalidCertificates=True)
mydb = myclient['Schedule']
mycollection = mydb['collection']

@app.route('/schedule', methods=['POST','GET'])
def show():
    return render_template("index.html")
@app.route('/update', methods=['POST','GET'])
def update():
    print(request)
    print(request.data)
    print(request.json)
    return render_template("index.html")

if __name__ == "__main__":
    app.run(port='3060', debug=True)