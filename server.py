from flask import Flask, render_template
app = Flask(__name__)


@app.route('/schedule', methods=['POST','GET'])
def hello():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(port='3060', debug=True)