import React,{Component,useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View ,TextInput} from 'react-native';
import { robots } from './robots';



export default function Seachbar({/*searchfield,*/searchchange}){

    return (
        
        <TextInput
        style={styles.input}
        onChangeText={searchchange}
        placeholder={"search robots here..."}
     //value={"your search here"}
     />
        
    )
}

const styles =StyleSheet.create({

    input: {
        height: 4,
        margin: 30,
        borderWidth: 1,
        padding: 10,
        borderRadius:4,
        backgroundColor:'#fff'
      
      },
});
