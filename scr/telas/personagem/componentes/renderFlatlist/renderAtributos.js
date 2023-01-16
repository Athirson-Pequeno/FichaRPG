import { useState } from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

export default function RenderAtributos({item, atualizarAtributos}){

    const [texto, setTexto] = useState(item.valor.toString())
    const valor = Math.floor((parseInt( texto ) -10)/2)

    function atualiza(  item, valorDigitado  ){
        atualizarAtributos( item, valorDigitado )
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
         <View style={estilos.viewModificador}>
        {( valor >= 0) ? <Text style={estilos.textoValor}>+</Text> : <></>}
        {(!isNaN(valor))?
        <Text style={estilos.textoValor}>{ valor.toString() }</Text>:
        <Text style={estilos.textoValor}>0</Text>
    }
        </View>
        </View>)
}


const estilos = StyleSheet.create({
    valContainer:{
        flexDirection: 'row',
        marginHorizontal:5,
        marginVertical:2,
        alignItems:"center",
        backgroundColor:"#c0c0c0",
        paddingHorizontal:6,
        borderRadius:6,
        flex:1,
    },
    valInput:{
        borderWidth: 2,
        flex:1,
        borderRadius:6,
        paddingHorizontal:8,
        margin:3,
        height:30,
     
    },
    text:{
        flex:3,
 
    },
    viewModificador:{
        borderWidth:2,
        padding:2,
        borderRadius:6,
        width:30,
        height:30,
        flexDirection:"row",
        justifyContent: "center",
        flex:1,
        
    },
    textoValor:{
        alignSelf:"center",
         
    }
})