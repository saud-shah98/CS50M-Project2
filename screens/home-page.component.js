import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';
import {Component} from 'react';
import {Header} from '../components/header/header.component';
import {getMovies} from '../api/omd';
import {MovieList} from '../components/list/list.component'
import { timing } from 'react-native-reanimated';


let apiKey = 'd7ec2628'

export class HomePage extends Component {
    constructor(props){
        super(props);
        this.state = {
            movies: [],
            search: '',
            initiateSearch: false,
          }
        }
        
    callback = (movie) => {
        this.setState({search: movie, initiateSearch: true})
        
    }
    submitForm = () => {
      this.props.navigation.navigate('Results');
    }
    

 render(){
   return(
    <View style={styles.container}>  
     <Text style={styles.logoText}>Movie Browser</Text>
    <Image style={styles.logo}source={{
          uri: 'https://i.pinimg.com/originals/43/eb/48/43eb48a2bbdefdd1c34b87bb72c9c3c7.jpg',
        }}/>
     <Header submitForm={this.submitForm} parrentCallBack={this.callback}/>
    
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
      height: 400,
      width: 300,
      alignSelf:'center'
    },
    logoText:{
      fontSize: 40,
      color:'white',
      textAlign:'center',
      backgroundColor:'green',
      padding: 10,
      
  }
  });
  