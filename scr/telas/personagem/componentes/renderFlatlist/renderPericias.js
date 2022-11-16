import react, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function RenderPericias({item}){

    const valor = Math.floor((parseInt( item.valor) -10)/2)

    const [cor, setCor] = useState("#f00")
    const estilos = estilosFuncao(cor)

   return (<TouchableOpacity 
   style={estilos.containerPericia}
   onPress={()=> setCor("#d0d")}
   >
        <Text>{item.texto}</Text>
        <View style={estilos.viewModificador}>
        {( valor >= 0) ? <Text style={{ alignSelf:"center"}}>+</Text> : <></>}
        <Text style={{ alignSelf:"center"}}>{ valor.toString() }</Text>
        </View>
        </TouchableOpacity>)
}

const estilosFuncao = (cor) => StyleSheet.create({
    containerPericia:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:5,
        backgroundColor: cor

    },
    viewModificador:{
        borderWidth:1,
        padding:2,
        borderRadius:6,
        width:30,
        height:30,
        flexDirection:"row",
        justifyContent: "center"
    }
})