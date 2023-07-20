from config.db import connection
from flask import Flask
import os
from flask_cors import CORS
from routes.manager_route import manager_router

app = Flask(__name__)
CORS(app)

#home route
@app.route('/', methods=['GET'])
def welcome():
    return ('Welcome to prism port application!')

app.register_blueprint(manager_router,url_prefix='/manager')

if __name__ == '__main__':
    connection()
    port = int(os.environ.get('PORT',5000))
    app.run(host='0.0.0.0', port=port)
