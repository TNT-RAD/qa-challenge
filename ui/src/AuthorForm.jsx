import React from 'react';
import './AuthorForm.css';

export class AuthorForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          author: '',
          results: []
      }

      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({author: event.target.value});
      }

    handleSubmit(event) {
      event.preventDefault();
      fetch(`http://127.0.0.1:5000/api/books/all`)
        .then(res => res.json())
        .then(data => this.setState({results:
            data.filter(
                entry => entry.author.includes(this.state.author)
            )
        }))
    }

    renderData() {
        return this.state.results.map((book, index) => {
            return (
               <tr key={book.title}>
                  <td>{book.title}</td>
                  <td>{book.author}</td>
               </tr>
            )
         })
      }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Author:
            <input type="text" onChange={this.handleChange}></input>
          </label>
          <input type="submit" value="Submit" />
          <br/>
          <div id='resultsContainer'>
            <table id='results'>
                <tbody>
                    {this.renderData()}
                </tbody>
            </table>
          </div>
        </form>
      );
    }
  }