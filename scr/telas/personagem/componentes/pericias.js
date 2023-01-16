import React, { useEffect, useState } from "react";
import { StyleSheet, Text, FlatList, View } from "react-native";
import RenderPericias from "./renderFlatlist/renderPericias";

export default function Pericias({lista, atualizarPericiasDB}){

    const [listaPericias, setListaPericias] = useState([])

    useEffect(()=>{ 
        setListaPericias(lista)
    })

    const Cabecalho = <Text style={estilos.textoTitulo}>Pericias</Text>
    return (<View style={{backgroundColor:"#80808030", paddingBottom:8, margin:6, borderRadius:12}}>
    <FlatList 
        ListHeaderComponent={Cabecalho}
        data={listaPericias}
        key={item => item.id}
        numColumns={2}
        scrollEnabled={false}
        renderItem={({item})=><RenderPericias key={item.id} item={item} atualizarPericiasDB={atualizarPericiasDB}/>}>

        </FlatList>
    </View>)
}

const estilos = StyleSheet.create({
    
    textoTitulo:{
        alignSelf:"center", 
        fontSize:20
    }
})