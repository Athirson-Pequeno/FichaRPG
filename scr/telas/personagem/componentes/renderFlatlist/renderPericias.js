import { useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function RenderPericias({item, atualizarPericiasDB}){

    const valor = Math.floor((parseInt( item.valor) -10)/2)

    const [selecionado, setSelecionado] = useState(item.selecionado)
    const estilos = estilosFuncao(selecionado)

    function atualizar(){
        setSelecionado(!selecionado)
        atualizarPericiasDB(item.id)
    }

   return (<TouchableOpacity 
   style={estilos.containerPericia}
   onPress={()=> atualizar()}>
        <Text>{item.nome} ({item.modificador})</Text>
        <View style={estilos.viewModificador}>
        {( valor >= 0) ? <Text style={{ alignSelf:"center"}}>+</Text> : <></>}
        <Text style={{ alignSelf:"center"}}>{ valor.toString() }</Text>
        </View>
        </TouchableOpacity>)
}

const estilosFuncao = (selecionado) => StyleSheet.create({
    containerPericia:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:5,
        backgroundColor: selecionado ? "#760100" : "#424149",
        paddingHorizontal:6,
        borderRadius:6

    },
    viewModificador:{
        borderWidth:1,
        padding:2,
        borderRadius:6,
        width:30,
        height:30,
        flexDirection:"row",
        justifyContent: "center",
        margin:3,

    }
})