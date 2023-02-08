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

# Challenge Details


1. Look through this projects issue tracker to find an issue to work on.
2. Submit a Pull Request to this repository with your changes for review, watch out for comments/feedback to see if things need improvement.
3. Once your PR has been reviewed and merged, wait for feedback from recruiter as for next steps.
