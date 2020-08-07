# Library test app

This is a basic library tool. It maintians a database of books, with a UI to filter books by Author. API endpoints are also supplied for retrieving all books and for adding books to the database.

## Instalation

```
python -m venv venv
. venv/bin/activate
pip install -r requirements.txt
cd ui
npm install
```

## Running
```
python app.py
npm start
```

## API

### /api/books/all
GET
Returns all books

### /api/books/add
PUT
Adds a book to the database. Takes query parmeters:
- id
- published
- author
- first_sentence
- title
