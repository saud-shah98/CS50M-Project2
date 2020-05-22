import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Component} from 'react';
import {Header} from '../components/header/header.component';

import {MovieList} from '../components/list/list.component'

export class HomePage extends Component {
    constructor(){
        super();
        this.state = {
            movies: [],
            search: '',
            initiateSearch: false
          }
    }

    callback = (movie) => {
        this.setState({search: movie, initiateSearch: true})
       
      }


 render(){
    const {movies,search,initiateSearch} = this.state;
   return(
    <View style={styles.container}>  
    {initiateSearch ?  (
    <MovieList searchTerm={search} movies={movies}/>
     ) : <Text>Search for a movie...</Text>}
     <Header parrentCallBack={this.callback}/>
  </View>
   )
}
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'whitesmoke',
      flex: 1
    },
  });
  