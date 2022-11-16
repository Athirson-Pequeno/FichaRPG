import react from "react";
import { View, Text } from "react-native";

export default function RenderPersonagens({item}){
    return <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Text>{item.nome}</Text>
        <Text>{item.classe}</Text>
        <Text>{item.nivel.toString()}</Text>
    </View>
}