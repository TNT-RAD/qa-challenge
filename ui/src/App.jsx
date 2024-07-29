import React from 'react';
import './App.css';
import { AuthorForm } from './AuthorForm.jsx'

const App = () => (
  <div className="App">
    <header className="App-header">
      <p>
        Library
      </p>
    </header>

    <div className="App-body">
      <p>
        Welcome to the library. Please search for an Author.
      </p>

      <AuthorForm />
    </div>
  </div>
);

export default App;
