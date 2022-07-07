import React, { Component } from "react";
import { View,StyleSheet, TextInput,TouchableOpacity, Text,FlatList, Image, TouchableOpacity,Alert,KeyboardAvoidingView } from "react-native";

export default class LoginScreen extends React.Component{
    render(){
        return(
            <View>
                <Text>Pantalla de acceso</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    loginBox:{
        width:300,
        height: 40,
        borderWidth: 1.5,
        fontSize:20,
        margin:10,
        paddingLeft:10
    }
})