import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';

function Item({title, rating}) {
    return(
      <View style={styles.entry}>
        <Text style={styles.title}>{title}</Text>
      </View>
    )
  }


export class ResultsPage extends Component {

    NoResultsContainer(){
        return(
       <Text style={{textAlign: 'center', marginTop: 30}}>No results</Text>
    )}


    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <View style={styles.container}>

            <FlatList style={styles.list}
                
                ListEmptyComponent={this.NoResultsContainer}
                keyExtractor={item => item.id}
                renderItem={({item}) =><Item title={item.title}/> }/>
            
                </View>
        )
    }
}

const styles = StyleSheet.create({
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
    backgroundColor:'white',
  }
  });
  