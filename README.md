# QA Challenge - Library Test Application

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

The goal of this challenge is to write and execute a test plan to identify bugs in this application. Note that you are not expected to fix any of the bugs that you find. Your response should consist of the following:

1. A test plan detailing the tests that should be conducted in order to rigorously test the application UI. This can be in any format you like, but you should consider adding at least the following for each test:
    1. Inputs and any expected outputs
    1. Any expected validation errors
    1. Pass and failure conditions
    1. Brief explanations for the above to explain your reasoning
1. A test report detailing the results of manually running your tests on the application. This can be in any format you like, but you should consider adding at least the following:
    1. A summary of assumptions you make, including where you felt a particular requirement could be interpreted multiple ways
    1. A summary of items you tested
    1. A summary of problems you found in the application

For bonus points, you can optionally complete the following tasks:

1. Expand your test plan and test report to test the application API as well as the UI
1. Write automated tests for the API and / or UI of this application. You should use the Python language, but may use any testing frameworks and libraries you like
1. Perform a review of the application codebase, documenting any issues you find, such as:
    1. coding style
    1. correctness
    1. security issues
