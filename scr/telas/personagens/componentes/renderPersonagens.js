import React from "react";
import { Text, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { useNavigation } from "@react-navigation/core";

export default function RenderPersonagens({item}){

    const navigation = useNavigation();

    const caracteristicas = JSON.parse(item.caracteristicas)    

    return <TouchableOpacity style={estilos.cardPersonagens}
        onPress={()=> navigation.navigate('Personagem',{ item })}
        onLongPress={()=>{Alert.alert("esse é "+item.nome )}}>


        <Text>{item.nome}</Text>
        <Text>{caracteristicas.classe}</Text>
        <Text>{caracteristicas.raca}</Text>
        <Text>lvl: {caracteristicas.nivel}</Text>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    cardPersonagens:{
        borderWidth:4,
        borderRadius:10,
        flexDirection:"row",
        justifyContent:"space-between",
        margin:5,
        padding:8,
}
})

