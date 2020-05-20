import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput } from 'react-native';
import {Feather } from '@expo/vector-icons';


export const Header = ({parrentCallBack}) => {
    const [term, setTerm] = useState('');
    return(
        <View style={styles.container}>
            <Feather name="search" size={30} style={styles.icon} />
            <TextInput onChangeText = {(movie) => {
                setTerm(movie)
                parrentCallBack(movie)
            }} 
            style = {styles.search} placeholder={" Search for a movie..."}/>
        </View>
        
        
    )
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'white',
        height: 80,
        borderRadius: 8,
        marginHorizontal: 15,
        flexDirection: 'row',
        marginVertical: 6,
    },
    search:{
        flex: 1,
    },
    icon: {
        fontSize: 35,
        alignSelf: 'center',
        marginHorizontal: 15,
        color: 'purple',
        
        
    }
})