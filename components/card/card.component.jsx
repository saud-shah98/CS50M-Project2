import React from 'react';
import {View, Image, Text, FlatList, StyleSheet} from 'react-native';


export const Card = (props) => {
    return(
        <View style={styles.container}>
            <Text>Hello!</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flexDirection: 'row',
        borderWidth: 20,
    }
})