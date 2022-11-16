import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import RenderPericias from "./renderFlatlist/renderPericias";

export default function Pericias({lista}){

    const [listaPericias, setListaPericias] = useState([])

    useEffect(()=>{ 
        setListaPericias(lista)
    })



    return (<>
    <View style={estilos.containerPericia}>
        <FlatList
            data={listaPericias}
            keyExtractor={(item)=>item.id}
            renderItem={({item}) => <RenderPericias item={item}/>}
            scrollEnabled={false}
        />
    </View>
    </>)
}

const estilos = StyleSheet.create({
    
    containerPericia:{
        flex:1,
        padding:4,
        backgroundColor:"#c6c6c6"
    },
})