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
        {( valor >= 0) ? <Text style={{ alignSelf:"center", color:"#fff"}}>+</Text> : <></>}
        {(!isNaN(valor))?
        <Text style={{ alignSelf:"center", color:"#fff"}}>{ valor.toString() }</Text>:
        <Text style={{ alignSelf:"center", color:"#fff"}}>0</Text>
    }
        </View>
        </View>)
}


const estilos = StyleSheet.create({
    valContainer:{
        flexDirection: 'row',
        marginBottom:5,
        alignItems:"center",
        backgroundColor:"#424149",
        paddingHorizontal:6,
        borderRadius:6
    },
    valInput:{
        borderWidth: 2,
        flex:1,
        borderRadius:6,
        paddingHorizontal:8,
        margin:3,
        height:30,
        borderColor:"#fff",
        color:"#fff"
        
    },
    containerAtributos:{
        flex:1,
        padding:10,
        borderWidth:1,
        margin:6
    },
    text:{
        flex:3,
        color:"#fff"
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
        borderColor:"#fff",
        
    }
})