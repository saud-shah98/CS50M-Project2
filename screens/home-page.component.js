import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import {Component} from 'react';
import {Header} from '../components/header/header.component';
import {ListItem} from '../components/item/ListItem';

let apiKey = 'd7ec2628'

export class HomePage extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            movies: [
              
            ],
            search: '',
            initiateSearch: false,
          }
        }

        
    callback = (movie) => {
        console.log(movie)
        return fetch(`https://www.omdbapi.com?apikey=${apiKey}&s=${movie}`)
        .then((res) => res.json())
        .then((json) => {
          console.log(json);
          this.setState({movies:json.Search})
        })
        
        .catch((err) => {
          console.log(err);
        });
    }

    
    NoResultsContainer(){
      return(
     <Text style={{textAlign: 'center', marginTop: 30, backgroundColor:'white'}}>Search for a movie..</Text>
  )}

 render(){
   return(
    <View style={styles.container}>  
     <Text style={styles.logoText}>Movie Browser</Text>
    
        <View>
        <FlatList style={styles.list}
                data={this.state.movies}
                ListEmptyComponent={this.NoResultsContainer}
                keyExtractor={item => item.id}
                renderItem={({item}) =>
                <ListItem 
                navigation={this.props.navigation} 
                title={item.Title}
                year={item.Year}
                imageURL={item.Poster}
                id={item.imdbID}
                /> }/>
        </View>

     <Header parrentCallBack={this.callback}/>
    
  </View>
   )
}
}


const styles = StyleSheet.create({
    container: {
      backgroundColor: 'black',
      flex: 1,
    },
    logo: {
      height: 200,
      width: 200,
      alignSelf:'center'
    },
    logoText:{
      fontSize: 40,
      color:'darkred',
      textAlign:'center',
      backgroundColor:'whitesmoke',
      padding: 10,
      
  },
  entry: {
    backgroundColor:'#f9c2ff',
    padding:20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title:{
    fontSize:32,
  },
  list:{
    backgroundColor:'black',
    height: 400,
    marginTop: 20,
  }
  });
  