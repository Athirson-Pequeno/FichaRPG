import React from "react";
import { Text, View, StyleSheet } from "react-native";


export default function caracteristicas({caracteristicas, nome}){
    return (
    <View>
    {/* nome do personagem parte em desenvolvimento */}
        <Text style={estilos.nome}>{nome}</Text>
        <Text style={{fontSize:28}}>{caracteristicas.classe}</Text>
        <Text style={{fontSize:28}}>{caracteristicas.subclasse}</Text>
        <Text style={{fontSize:28}}>{caracteristicas.raca}</Text>
        <Text style={{fontSize:28}}>{caracteristicas.nivel}</Text>
        <Text style={{fontSize:28}}>{caracteristicas.vidaTotal}</Text>
        <Text style={{fontSize:28}}>{caracteristicas.vidaTemporaria}</Text>
        <Text style={{fontSize:28}}>{caracteristicas.deslocamento}</Text>
        <Text style={{fontSize:28}}>{caracteristicas.bonusProf}</Text>
        <Text style={{fontSize:28}}>{caracteristicas.armadura}</Text>
        <Text style={{fontSize:28}}>{caracteristicas.dadoDeVida}</Text>
        <Text style={{fontSize:28}}>{caracteristicas.anotacoes}</Text>
    </View>
    )
}

const estilos = StyleSheet.create({
    nome:{
        fontSize:28,
        alignSelf:"center",
        borderColor:"#000",
        borderWidth:2
    }
})