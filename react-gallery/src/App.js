import React, { Component } from 'react';
import {
  BrowserRouter, 
  Route, 
  Switch
} from 'react-router-dom';

import axios from 'axios';
import './App.css';

// Import components
import Search from './components/Search';
import Nav from './components/Nav';
import Gallery from './components/Gallery';
import NotFound from './components/NotFound';

// Import API key
import apiKey from './config';
const key = apiKey;

export default class App extends Component {

  constructor() {
    super();
    this.state = {
      pics: [],
      showGallery: false,
      searchTerm: '', 
      loading: false
    };
  }

  performSearch = (query) => {
    this.setState({loading: true});
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${key}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)
    .then(response => {
      this.setState({
        pics: response.data.photos.photo,
        showGallery: true, 
        searchTerm: query, 
        loading: false
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() { 
    return (
      <BrowserRouter>
        <div className="container">
          <Search onSearch={this.performSearch} />
          <Nav onClick={this.performSearch}/>
          {
            (this.state.loading)
            ? <p>Loading...</p>
            : ''
          } 
          <Switch>
            <Route exact path="/" render={ ()=>{} } />
            <Route path="/results" 
                   render={ () => <Gallery data={this.state.pics} /> } />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
