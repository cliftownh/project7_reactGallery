import React, { Component } from 'react';
// import {
//   BrowserRouter, 
//   Route
// } from 'react-router-dom';

import axios from 'axios';
import './App.css';

// Import components
import Search from './components/Search';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import apiKey from './config';
const key = apiKey;

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      pics: []
    };
  }

  componentDidMount() {
  }

  performSearch = (query) => {
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        pics: response.data.photos.photo
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">Photo Search</h1>
            <Search onSearch={this.performSearch} />
            <Nav />
          </div>   
        </div>    
        <div className="main-content">
          <Gallery data={this.state.pics} />
        </div>
      </div>
    );
  }

}
