from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_node():
    return 'Hello world with Python Flask'

@app.route('/get')
def hello_node_get():
    return 'Hello world get with Python Flask'
	
if __name__ == '__main__':
    app.run(debug=True,host='0.0.0.0',port=8080)
