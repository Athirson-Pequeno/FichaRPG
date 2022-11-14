import React from "react";
import { Text, View, ScrollView, SafeAreaView } from "react-native";
import Atributos from "./componentes/atributos";
import Pericias from "./componentes/pericias";


export default function TelaPersonagem(){

    

    return (<ScrollView>
    {/* <Text>nome</Text>
    <Text>classe</Text>
    <Text>nivel</Text>
    <Text>vida</Text>
    <Text>Ca</Text>
    <Text>raca</Text>
    <Text>bonus proficiencia</Text>
    <Text>deslocamento</Text>
    <Text>dado de vida</Text> */}

    <View style={{flexDirection:"row", flex:1}}>
        <Atributos/>
        <Pericias/>
   </View>


   </ScrollView>)
}