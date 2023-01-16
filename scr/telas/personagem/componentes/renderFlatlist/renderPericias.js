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
        <Text style={estilos.textoModificador}>{item.nome} ({item.modificador})</Text>
        <View style={estilos.viewModificador}>
        {( valor >= 0) ? <Text style={estilos.textoSinal}>+</Text> : <></>}
        <Text style={estilos.textoSinal}>{ valor.toString() }</Text>
        </View>
        </TouchableOpacity>)
}

const estilosFuncao = (selecionado) => StyleSheet.create({
    containerPericia:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:5,
        backgroundColor: selecionado ? "#760100" : "#c0c0c0",
        paddingHorizontal:6,
        borderRadius:6, 
        flex:1,
        marginHorizontal:5,
        marginVertical:2
    },
    viewModificador:{
        borderWidth:2,
        padding:2,
        borderRadius:6,
        width:30,
        height:30,
        flexDirection:"row",
        justifyContent: "center",
        margin:3,
        borderColor: selecionado ? "#fff" : "#000"
    },
    textoModificador:{
        color: selecionado ? "#fff" : "#000",
        fontSize:13
    },
    textoSinal:{
        alignSelf:"center",
        color:selecionado ? "#fff" : "#000"
    }
})