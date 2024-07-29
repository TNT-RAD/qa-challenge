import React, { useState } from 'react';
import './AuthorForm.css';

export const AuthorForm = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [authorData, setAuthorData] = useState([]);

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://127.0.0.1:5000/api/books/all`);
      const data = await response.json();
      setAuthorData(data);

    } catch(error) {
      console.error('Error:', error);
    }
  }

  const RenderData = () => {
    return authorData.map((book) => {
      return (
        <tr key={book.title}>
          <td>{book.title}</td>
          <td>{book.author}</td>
        </tr>
      )
    })
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Author:
        <input type="text" onChange={handleSearchTermChange}></input>
      </label>

      <input type="submit" value="Submit" />

      <br/>

      <div id='resultsContainer'>
        <table id='results'>
          <tbody>
            <RenderData />
          </tbody>
        </table>
      </div>
    </form>
  );
}