# Library test app

## Installation

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
Adds a book to the database. Takes query parameters:
- id
- published
- author
- first_sentence
- title