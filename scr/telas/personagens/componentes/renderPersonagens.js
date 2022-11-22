import { View, Text } from "react-native";

export default function RenderPersonagens({item}){


    const caracteristicas = JSON.parse(item.caracteristicas)
    const atributo = JSON.parse(item.atributos)

    console.log(caracteristicas)
    console.log(atributo)


    return <View style={{flexDirection:"row", justifyContent:"space-between"}}>
        <Text>{item.nome}</Text>
        <Text>{caracteristicas.classe}</Text>
        <Text>{caracteristicas.raca}</Text>
    </View>
}