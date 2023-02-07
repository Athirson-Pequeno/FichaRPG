import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/core";

export default function RenderPersonagens({item}){

    const navigation = useNavigation();

    const caracteristicas = JSON.parse(item.caracteristicas)    

    return <TouchableOpacity style={estilos.cardPersonagens}
        onPress={()=> navigation.navigate('Personagem',{ item })}>

        <View style={estilos.nomeContainer}>
            <Text style={estilos.textNome}>{item.nome}</Text>
        </View>

        <View style={estilos.caracteristicasContainer}>
            <Text style={estilos.caracteristicaContainer}>{caracteristicas.classe}</Text>
            <Text style={estilos.caracteristicaContainer}>{caracteristicas.raca}</Text>
            <Text >lvl: {caracteristicas.nivel}</Text>
        </View>
    </TouchableOpacity>
}

const estilos = StyleSheet.create({
    cardPersonagens:{
        borderWidth:4,
        borderRadius:10,
        justifyContent:"space-between",
        margin:5,
        padding:8,
    },
    nomeContainer:{
        borderBottomColor:"#000",
        borderBottomWidth:2
    },
    textNome:{
        fontSize:22
    },
    caracteristicasContainer:{
        justifyContent:"space-between",
        flexDirection:"row",
        flex:1
    },
    caracteristicaContainer:{
        flex:1
    }
})

