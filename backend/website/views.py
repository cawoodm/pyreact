from flask import Blueprint
from flask import send_from_directory

views = Blueprint('views', __name__)


@views.route('/')
@views.route('/<path:path>')
def index(path='index.html'):
    return send_from_directory('dist', path)


@views.route('/shopping-list')
def todos():
    return ['Grapes', 'Soap', 'Spaghetti', 'Marmalade', 'Bread']
