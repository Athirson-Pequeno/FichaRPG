import React from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";

export default function TelaPersonagem(){

    return (<View>
        <View>
            <View style={estilos.valContainer}>
            <Text>Des</Text>
            <TextInput style={estilos.valInput}></TextInput>
            </View>
            <View style={estilos.valContainer}>
            <Text>for</Text>
            <TextInput style={estilos.valInput}></TextInput>
            </View><View style={estilos.valContainer}>
            <Text>car</Text>
            <TextInput style={estilos.valInput}></TextInput>
            </View><View style={estilos.valContainer}>
            <Text>sab</Text>
            <TextInput style={estilos.valInput}></TextInput>
            </View><View style={estilos.valContainer}>
            <Text>int</Text>
            <TextInput style={estilos.valInput}></TextInput>
            </View><View style={estilos.valContainer}>
            <Text>con</Text>
            <TextInput style={estilos.valInput}></TextInput>
            </View>
        </View>
    </View>)
    }

    const estilos = StyleSheet.create({
valTexto:{
},
valContainer:{
    flexDirection:'row'
},
valInput:{
   borderWidth:3
}


    })