import React,  { Component, useState  } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from './components/header/header.component'


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      movie: ''
    }
  }

  callback = (movie) => {
    this.setState({movie: movie})
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Header parrentCallBack={this.callback}/>
       <Text style={{color:'black', fontSize: 40, }}>{this.state.movie}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'whitesmoke',
    marginTop: 20,
    flex: 1
  },
});
