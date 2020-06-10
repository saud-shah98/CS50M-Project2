import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button } from 'react-native';
import {Feather } from '@expo/vector-icons';


export const Header = ({parrentCallBack, submitForm}) => {
    const [term, setTerm] = useState('');
    return(
        <View style={styles.container}>
            <Feather name="search"
             size={30} 
             style={styles.icon} 
             />
            <TextInput onChangeText = {(movie) => {
                setTerm(movie)
            }
        } 
            style = {styles.search} 
            placeholder={" Search for a movie..."}
            />
            <Button title='Search' onPress={() => {parrentCallBack(term)}}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'whitesmoke',
        borderRadius: 8,
        flexDirection: 'row',
        padding: 15,
        position: 'absolute',
        bottom:20,
        
    },
    search:{
        flex: 1,
        color:'darkred',

        
    },
    icon: {
        fontSize: 35,
        marginHorizontal: 15,
        color: 'darkred',
    },
})