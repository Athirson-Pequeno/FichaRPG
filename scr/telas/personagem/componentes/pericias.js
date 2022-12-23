import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import RenderPericias from "./renderFlatlist/renderPericias";

export default function Pericias({lista, atualizarPericiasDB}){

    const [listaPericias, setListaPericias] = useState([])

    useEffect(()=>{ 
        setListaPericias(lista)
    })


    return (<>
    <View style={estilos.containerPericia}>
        <Text style={{alignSelf:"center", fontSize:20}}>Pericias</Text>
        {listaPericias.map((item)=>{return <RenderPericias key={item.id} item={item} atualizarPericiasDB={atualizarPericiasDB}/>})}
    </View>
    </>)
}

const estilos = StyleSheet.create({
    
    containerPericia:{
        flex:1,
        padding:4,
        
    },
})