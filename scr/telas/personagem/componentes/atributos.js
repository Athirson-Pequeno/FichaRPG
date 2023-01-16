import React, {useEffect, useState} from "react";
import { View ,StyleSheet, Text, FlatList } from "react-native";
import RenderAtributos from "./renderFlatlist/renderAtributos";


export default function Atributos({lista, atualizarAtributos}){


    const [listaAtributos, setListaAtributos] = useState([])

    useEffect(()=>{
        setListaAtributos(lista)
    })

    const Cabecalho = <Text style={estilos.textoTitulo}>Atributos</Text>
   
    return (<View style={{backgroundColor:"#80808030", paddingBottom:8, margin:6, borderRadius:12}}>
    <FlatList 
        ListHeaderComponent={Cabecalho}
        data={listaAtributos}
        key={item => item.id}
        numColumns={2}
        scrollEnabled={false}
        renderItem={({item})=><RenderAtributos key={item.id} item={item} atualizarAtributos={atualizarAtributos}/>}>

        </FlatList>
    </View>
)}


const estilos = StyleSheet.create({
    
    textoTitulo:{
        alignSelf:"center", 
        fontSize:20
    }
})