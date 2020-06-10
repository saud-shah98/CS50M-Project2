import React from 'react';
import {View, Image, Text, FlatList, StyleSheet} from 'react-native';
import {CardItem} from './card-item/card-item.component'

export const CardGroup = ({title, year, imageURL, navigation, director, language}) => {
    return(
        <View style={styles.container}>
            <CardItem 
            title={title} year={year} director={director} language={language} imageURL={imageURL} navigation={navigation}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'whitesmoke',
        height: 500,
        margin: 25,
        padding: 20,
    },
    text: {
        fontSize: 42,
        color:'whitesmoke',
    }
})