from flask import Flask, redirect, render_template, request, url_for
import pymongo
from bson.objectid import ObjectId
app = Flask(__name__)
true = True
myclient = pymongo.MongoClient('mongodb+srv://godempty:momo0305@cluster0.i5qta6c.mongodb.net/?retryWrites=true&w=majority',tls=True,tlsAllowInvalidCertificates=True)
mydb = myclient['Schedule']
datadb = mydb['datas']

@app.route('/')
def init():
    return redirect('/schedule')

@app.route('/schedule', methods=['POST','GET'])
def show():
    if request.method == 'POST':
        newdata = {
            'time': request.form.get('time'),
            'place': request.form.get('place'),
            'description': request.form.get('description')
        }
        datadb.insert_one(newdata)
    datas = datadb.find()
    return render_template("normal.html", datas=datas)
@app.route('/delete/<id>')
def delete(id):
    datadb.delete_one({'_id': ObjectId(id)})
    return redirect('/schedule')

if __name__ == "__main__":
    app.run(port='3060', debug=True)