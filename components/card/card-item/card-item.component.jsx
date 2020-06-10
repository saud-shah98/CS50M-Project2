import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

export const CardItem = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{navigation.getParam('title')}</Text>
            <Text style={styles.year}>{navigation.getParam('year')}</Text>
            <Text style={styles.id}>{navigation.getParam('imdbID')}</Text>
            <Image source={{uri: `${navigation.getParam('imageURL')}`}} style={styles.image} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:'center',      
    },
    title: {
        fontSize: 52,
        color:'red'
    },
    year: {
        fontSize: 25,
        color:'red'
    },
    id:{
        fontSize: 10,
        color:'red'
    },
    image:{
        width: 100,
        height: 200,
    }

})