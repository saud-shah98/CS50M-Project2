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
                parrentCallBack(movie) 
            }} 
            style = {styles.search} 
            placeholder={" Search for a movie..."}
            onSubmitEditing={submitForm}
            />
            <Button color="lightblue" title='Enter' 
            onPress={submitForm}/>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor: 'green',
        borderRadius: 8,
        flexDirection: 'row',
        padding: 15,
        position: 'absolute',
        bottom:20,
        
    },
    search:{
        flex: 1,
        color:'white',
        
    },
    icon: {
        fontSize: 35,
        marginHorizontal: 15,
        color: 'white',
    },
})