import react, { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

export default function RenderAtributos({item, atualizaAtributo}){
    const [texto, setTexto] = useState(item.valor.toString())

    function atualiza(  item, valorDigitado  ){
        atualizaAtributo(item, valorDigitado)
    }


    return (
        <View style={estilos.valContainer}>
        <Text style={estilos.text}>{item.abreviacao}</Text>
        <TextInput 
        keyboardType="numeric"
        defaultValue={item.valor.toString()} 
        style={estilos.valInput}
        value={texto}
        onChangeText={(text)=>{
                
            text = text.replace(/[^0-9]$/g, "");
                atualiza(item,text)
                setTexto(text)          
            
        }}
        ></TextInput>
        </View>)
}


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
        padding:10,
        borderWidth:1,
        margin:6
    },
    text:{
        flex:2
    }
})