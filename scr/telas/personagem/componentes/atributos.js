import React, {useEffect, useState} from "react";
import { View, StyleSheet, FlatList } from "react-native";
import RenderAtributos from "./renderFlatlist/renderAtributos";


export default function Atributos({lista, atualizaAtributo}){

    const [listaAtributos, setListaAtributos] = useState([])

    useEffect(()=>{
        setListaAtributos(lista)
    })

   
    return (<>
        <View style={estilos.containerAtributos}>
        <FlatList
        
        data={listaAtributos}
        renderItem={({item}) => <RenderAtributos item={item} atualizaAtributo={atualizaAtributo}/>}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        />  
        </View>
        </>
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
        backgroundColor:"#c6c6c6"
    },
    text:{
        flex:2
    }
})