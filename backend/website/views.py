from flask import Blueprint
from flask import send_from_directory

views = Blueprint('views', __name__)

# Host built UI in backend


@views.route('/')
@views.route('/<path:path>')
def index(path='index.html'):
    return send_from_directory('dist', path)


@views.route('/api/shopping-list')
def todos():

    return ['Grapes', 'Soap', 'Spaghetti', 'Marmalade', 'Bread'] #, {"Access-Control-Allow-Origin": "https://5173-cawoodm-pyreact-oft7hvkp559.ws-eu105.gitpod.io", "Access-Control-Allow-Credentials": "true"}
