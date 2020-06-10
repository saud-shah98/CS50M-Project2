import React, {Component} from 'react';
import {TouchableOpacity, View, Text, FlatList, StyleSheet} from 'react-native';

export const ListItem = ({title,year, navigation, director, language, imageURL}) => {
        return(
            <TouchableOpacity style ={styles.element}
            onLongPress={() => navigation.navigate('Detail', {title: title, year: year, director: director, language: language, imageURL: imageURL})
            }
            >
            <View>
                <Text style={styles.elementText}>{title}</Text>
        <Text style={styles.elementText}>{year}</Text>
            </View>
            </TouchableOpacity>
        )
}

const styles = StyleSheet.create({
    element: {
        backgroundColor: 'darkred',
        margin: 5,
        padding: 5,
    },
    elementText:{
        color: 'whitesmoke'
    }
})