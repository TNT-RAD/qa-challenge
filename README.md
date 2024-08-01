# Library Test Application

This is a sample application for a basic library tool. It maintians a database of books, with a UI to filter books by author. API endpoints are also supplied for retrieving all books and for adding books to the database.

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
Adds a book to the database. Takes query parmeters:
- id
- published
- author
- first_sentence
- title

# Challenge Details

This application has various bugs and security issues which you are not expected to fix. The goal of this challenge is to write automated tests that expose issues in the sample application.

Write a Python program that implements unit tests for this application, subject to the following constraints:

1. The program must be executable from the command line
2. The program must display a summary of test results upon completion
3. The program must give some indication of progress while executing

Additionally, document the following:

1. A summary of items tested by your program
2. A summary of problems in the sample application found by your program

For bonus points, you can optionally complete the following tasks:

1. Implement additional unit tests for the sample application UI, and document items tested and problems found
2. Document issues with the UI functionality, API design, code structure, or anything else in the sample application that you consider problematic but that is not covered by your tests

Document any assumptions you make, including where you felt a particular requirement could be interpreted multiple ways.
