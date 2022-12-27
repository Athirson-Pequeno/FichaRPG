import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import RenderCaracteristicas from "./renderFlatlist/renderCaracteristicas";



export default function caracteristicas({caracteristicas, nome}){
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
    <View>

    <View style={estilos.viewStyle}>
    <Text style={estilos.textStyle}>Nome</Text>
    <TextInput
      placeholder={nomePersonagem}
      value={nomePersonagem}
      onChangeText={text => setNomePersonagem(text)}
      style={{fontSize:28}}/>
      </View>
    {/* nome do personagem parte em desenvolvimento */}
    {lista.map((elemento) =>{ return <RenderCaracteristicas key={elemento} elemento={elemento}/> })}
    
    {/* <View style={estilos.viewHorizontal}>    

        <View style={[estilos.viewStyle, {flex:1}]}>
            <Text style={estilos.textStyle}>Classe</Text>
            <Text style={{fontSize:28}}>{caracteristicas.classe}</Text>
        </View>

        <View style={[estilos.viewStyle, {flex:1}]}>
            <Text style={estilos.textStyle}>Sub-Classe</Text>
            <Text style={{fontSize:28}}>{caracteristicas.subclasse}</Text>
        </View> 

    </View>

    <View style={estilos.viewHorizontal}>  
        <View style={[estilos.viewStyle, {flex:1}]}>
                <Text style={estilos.textStyle}>Raça</Text>
                <Text style={{fontSize:28}}>{caracteristicas.raca}</Text>
        </View>

        <View style={[estilos.viewStyle, {flex:1}]}>
                <Text style={estilos.textStyle}>Nível</Text>
                <Text style={{fontSize:28}}>{caracteristicas.nivel}</Text>
        </View>
    </View>

    <View style={estilos.viewHorizontal}>   
    
        <View style={[estilos.viewStyle, {flex:1}]}>
            <Text style={estilos.textStyle}>Vida Total</Text>
            <Text style={{fontSize:28}}>{caracteristicas.vidaTotal}</Text>
        </View>

        <View style={[estilos.viewStyle, {flex:1}]}>
            <Text style={estilos.textStyle}>Vida Temporaria</Text>
            <Text style={{fontSize:28}}>{caracteristicas.vidaTemporaria}</Text>
        </View> 

    </View>


    <View style={estilos.viewHorizontal}>   
    
        <View style={[estilos.viewStyle, {flex:1}]}>
            <Text style={estilos.textStyle}>Deslocamento</Text>
            <Text style={{fontSize:28}}>{caracteristicas.deslocamento}</Text>
        </View>

        <View style={[estilos.viewStyle, {flex:1}]}>
            <Text style={estilos.textStyle}>Bônus de Proficiencia</Text>
            <Text style={{fontSize:28}}>{caracteristicas.bonusProf}</Text>
        </View> 
    
    </View>
    
    
    <View style={estilos.viewHorizontal}>   
    
        <View style={[estilos.viewStyle, {flex:1}]}>
            <Text style={estilos.textStyle}>Armadura</Text>
            <Text style={{fontSize:28}}>{caracteristicas.armadura}</Text>
        </View>

        <View style={[estilos.viewStyle, {flex:1}]}>
            <Text style={estilos.textStyle}>Dado de Vida</Text>
            <Text style={{fontSize:28}}>{caracteristicas.dadoDeVida}</Text>
        </View> 
    
    </View>


    <View style={[estilos.viewStyle, {flex:1}]}>

        <Text style={estilos.textStyle}>Anotações</Text>
        <Text style={{fontSize:28}}>{caracteristicas.anotacoes}</Text>

    </View> */}
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