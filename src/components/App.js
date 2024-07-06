import * as React from 'react';
import {Component} from "react";
import Nav from './Nav';

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      searchTerm: ''
    }
    this.apiKey = '101aa8f223c7bd2a3b7caf34cc1de3e2'
  }

  handleSubmit = (e) => {
    e.preventDefault();

    fetch('https://api.themoviedb.org/3/search/movie?api_key=101aa8f223c7bd2a3b7caf34cc1de3e2&query=${this.state.searchTerm')
        .then(data => data.json())
        .then(data => {
          console.log("asdsadas");
          this.setState({movies: [...data.results]})
        })
  }

  handleChange = (e) => {
    this.setState({searchTerm: e.target.value})

  }

  render() {
    return (
        <div className='App'>
          <Nav />
        </div>
    );
  }
}
export default App;