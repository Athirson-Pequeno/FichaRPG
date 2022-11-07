import React from "react";
import { Text, View, ScrollView } from "react-native";
import Atributos from "./componentes/atributos";
import Pericias from "./componentes/pericias";
import atributosJson from '../../servicos/dados/atributos.json'

export default function TelaPersonagem(atributo){

    

    return (<ScrollView>
    <Text>nome</Text>
    <Text>classe</Text>
    <Text>nivel</Text>
    <Text>vida</Text>
    <Text>Ca</Text>
    <Text>raca</Text>
    <Text>bonus proficiencia</Text>
    <Text>deslocamento</Text>
    <Text>dado de vida</Text>
    



    <View style={{flexDirection:"row", flex:1}}>
        <Atributos/>
        <Pericias/>
   </View>
   <Text>nivel</Text>
   <Text>nivel</Text>
   <Text>nivel</Text>
   <Text>nivel</Text>
   <Text>nivel</Text>
   <Text>nivel</Text>
   <Text>nivel</Text>
   <Text>nivel</Text>
   <Text>nivel</Text>
   <Text>nivel</Text>
   <Text>nivel</Text>
   <Text>nivel</Text>
   <Text>nivel</Text>
   <Text>nivel</Text>
   <Text>nivel</Text>
   <Text>nivel</Text>
   <Text>nivel</Text>
   <Text>nivel</Text>

   </ScrollView>)
}