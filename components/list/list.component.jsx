import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {Card} from '../card/card.component';


export const MovieList = ({searchTerm, movies}) => {
    return(
        <View style={styles.container}>
           
    <Text style={styles.movieText}>{searchTerm}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor:'black',
    },
    movieText: {
     fontSize: 40,
     color: 'white',

    }
})