from flask import Blueprint
from flask import send_from_directory

views = Blueprint('views', __name__)

# Host built UI in backend


@views.route('/')
@views.route('/<path:path>')
def index(path='index.html'):
    return send_from_directory('dist', path), {"Access-Control-Allow-Origin": "*"}


@views.route('/api/shopping-list')
def todos():

    return ['Grapes', 'Soap', 'Spaghetti', 'Marmalade', 'Bread'], {"Access-Control-Allow-Origin": "*"}
