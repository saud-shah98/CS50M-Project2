import React,  { Component, useState  } from 'react';
import {search, movie} from './mockData';
import {MovieList} from './components/list/list.component'
import {fetchMovies} from './api/omd'
import {MovieApp} from './navigation/navigation'



export default class App extends Component {
  constructor(){
    super();
    this.state = {
      movies: []
    }

  }

  callback = (movie) => {
    this.setState({search: movie, initiateSearch: true})
   
  }



  render() {
  return (
    <MovieApp />
    )    
  }
}

