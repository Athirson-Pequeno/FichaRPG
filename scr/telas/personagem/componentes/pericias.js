import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";

const periciasJson = require('../../../servicos/dados/pericias.json')

export default function Pericias(){

    const [lista, setLista] = useState([])

    useEffect(()=>{
        dados()
    },[])

    const listaPericias = []

    function dados(){
        periciasJson.dados.forEach((item)=>{
            const add = `${item.nome} (${item.modificador})`
            listaPericias.push(add)
        })
        setLista(listaPericias)
    }

    return (<View style={{flex:1, padding:10, borderWidth:1, margin:6}}>
        {lista.map((item)=>{return ( 
        <View style={estilos.containerPericia} key={item}>
        <Text>{item}</Text>
        <Text style={{borderWidth:1, padding:2, borderRadius:6}}>+0</Text>
        </View> )})}
    </View>)
}

const estilos = StyleSheet.create({
    containerPericia:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:5
    }
})