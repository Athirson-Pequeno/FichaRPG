import react from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import RenderPersonagens from "./componentes/renderPersonagens";

export default function TelaPersonagens(){
    const data = [{
        nome:"Joao",
        classe:"Ladino",
        id:1,
        nivel: 2
    },{
        nome:"Pedro",
        classe:"Paladino",
        id:2,
        nivel: 2
    },{
        nome:"Ana",
        classe:"Mago",
        id:3,
        nivel: 2
    },{
        nome:"Camus",
        classe:"Feiticeiro",
        id:4,
        nivel: 2
    },]

    const cabeça = (<TouchableOpacity style={{borderColor:"#fff", borderWidth:3, margin:6}}><Text style={{fontSize:40, alignSelf:"center"}}>Adicionar</Text></TouchableOpacity>)
    return (<View>
        
        <FlatList 
        ListHeaderComponent={cabeça}
        data={data}
        renderItem={({item})=>(<RenderPersonagens item={item}/>)}
        keyExtractor={(item)=>item.id}
        />
    </View>)
}