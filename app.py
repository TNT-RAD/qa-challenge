import flask
from flask_cors import CORS, cross_origin
from flask import request, jsonify, make_response
import sqlite3

app = flask.Flask(__name__)
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'

def dict_factory(cursor, row):
    d = {}
    for idx, col in enumerate(cursor.description):
        d[col[0]] = row[idx]
    return d

@app.route('/api/books/all', methods=['GET'])
@cross_origin()
def get_all():
    conn = sqlite3.connect('books.db')
    conn.row_factory = dict_factory
    cur = conn.cursor()
    all_books = cur.execute('SELECT * FROM books;').fetchall()

    return jsonify(all_books)

@app.route('/api/books/<bid>', methods=['GET'])
@cross_origin()
def api_by_id(bid):
    conn = sqlite3.connect('books.db')
    conn.row_factory = dict_factory
    cur = conn.cursor()
    all_books = cur.execute(f'SELECT * FROM books WHERE id={bid};').fetchall()

    return jsonify(all_books)

@app.route('/api/books/add', methods=['PUT'])
@cross_origin()
def api_add():
    query_parameters = request.args

    book_id = query_parameters.get('id')
    published = query_parameters.get('published', '')
    author = query_parameters.get('author', '')
    first_sentence = query_parameters.get('first_sentence', '')
    title = query_parameters.get('title', '')

    conn = sqlite3.connect('books.db')
    cur = conn.cursor()
    if book_id in [n[0] for n in cur.execute(f'SELECT id FROM books;').fetchall()]:
        return "Book already exists!"
    cur.execute(f'INSERT INTO books (id, published, author, first_sentence, title) VALUES (?, ?, ?, ?, ?);', [book_id, published, author, first_sentence, title])
    conn.commit()

    return "Book added!"

@app.errorhandler(404)
@cross_origin()
def notFound(error):
    return make_response(jsonify({'error': 'Not found'}), 404)

app.run()