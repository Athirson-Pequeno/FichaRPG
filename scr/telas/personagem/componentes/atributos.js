import React, {useEffect, useState} from "react";
import { View, StyleSheet, Text } from "react-native";
import RenderAtributos from "./renderFlatlist/renderAtributos";


export default function Atributos({lista, atualizarAtributos}){


    const [listaAtributos, setListaAtributos] = useState([])

    useEffect(()=>{
        setListaAtributos(lista)
    })

   
    return (<View style={estilos.containerAtributos}>
        <Text style={{alignSelf:"center", fontSize:20}}>Atributos</Text>
        {listaAtributos.map((item)=>{return <RenderAtributos key={item.id} item={item} atualizarAtributos={atualizarAtributos}/>})}
        </View>
)}



const estilos = StyleSheet.create({
    valContainer:{
        flexDirection: 'row',
        marginBottom:5
    },
    valInput:{
        borderWidth: 3,
        flex:1,
        borderRadius:6,
        paddingHorizontal:8,
        
    },
    containerAtributos:{
        flex:1,
        padding:4,
    },
    text:{
        flex:2
    }
})