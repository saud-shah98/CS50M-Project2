import React, {Component} from 'react';
import {View, FlatList, Text, StyleSheet} from 'react-native';
import {CardGroup} from '../components/card/card.component';

export default class DetailPage extends Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        const {title, year, imageURL, director, language} = this.state;
        const {navigation} = this.props;
        return(
            <View style={styles.container}>
            <CardGroup 
            language={language} 
            director={director}
             navigation={navigation} 
             title={title} year={year} 
             imageURL={imageURL} />
        </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',

      },
})