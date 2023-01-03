import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import RenderCaracteristicas from "./renderFlatlist/renderCaracteristicas";



export default function caracteristicas({caracteristicas, nome, atualizarCaracteristicas, atualizarNome}){
    const [nomePersonagem, setNomePersonagem] = useState(nome);
    
    const keys = Object.entries(caracteristicas)
    
    let n  = 0
    const lista = []

    keys.forEach(i =>{
      if (n < keys.length-1){
        lista.push(keys.slice(n, n+2))
        n = n+2
    }})
    return (
    <View style={{marginBottom:8}}>

    <View style={estilos.viewStyle}>
    <Text style={estilos.textStyle}>Nome</Text>
    <TextInput
      placeholder={nomePersonagem}
      value={nomePersonagem}
      onChangeText={text => {
        setNomePersonagem(text)
        atualizarNome(text)
    }}
      style={{fontSize:28}}/>
      </View>
    {/* nome do personagem parte em desenvolvimento */}
    {lista.map((elemento) =>{ return <RenderCaracteristicas key={elemento} elemento={elemento} atualizarCaracteristicas={atualizarCaracteristicas}/> })}
    
    </View>)
}

const estilos = StyleSheet.create({
    nome:{
        fontSize:28,
        borderColor:"#000",
        borderWidth:2,
        marginHorizontal:6,
        paddingHorizontal:6,
        paddingVertical:3,
        marginTop:8,
        borderRadius:10
    },
    viewHorizontal:{
        flexDirection:"row",
        flex:1,
        justifyContent:"space-between"
    },
    viewStyle:{        
        borderColor:"#000",
        borderWidth:2,
        marginHorizontal:6,
        paddingHorizontal:6,
        paddingVertical:3,
        marginTop:8,
        borderRadius:10
    },
    textStyle:{
        borderBottomColor:"black",
        borderBottomWidth:1
    },
})