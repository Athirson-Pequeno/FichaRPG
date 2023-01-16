import React,{useState} from "react";
import { View, Text , StyleSheet, TextInput } from "react-native";

export default function RenderCaracteristicas({elemento, atualizarCaracteristicas}){
    const [primeiroElemento, setprimeiroElemento] = useState((elemento[0][1]).toString());
    const [segundoElemento, setsegundoElemento] = useState((elemento[1][1]).toString());
    

    return (
        <View style={estilos.viewHorizontal}>    
            <View style={[estilos.viewStyle, {flex:1}]}>
                <Text style={estilos.textStyle}>{(elemento[0][0]).toString().replace(/_/g," ")}</Text>
                <TextInput
                    value={primeiroElemento}
                    multiline={true}
                    onChangeText={text => 
                        {
                            setprimeiroElemento(text)
                            atualizarCaracteristicas(text, (elemento[0][0]).toString())
                            
                        }
                    }
                    style={{fontSize:20, width:'100%'}}/>           
            </View>

            <View style={[estilos.viewStyle, {flex:1}]}>
                <Text style={estilos.textStyle}>{(elemento[1][0]).toString().replace(/_/g," ")}</Text>
                    <TextInput
                    value={segundoElemento}
                    multiline={true}
                    onChangeText={text => {
                        setsegundoElemento(text)
                        atualizarCaracteristicas(text, (elemento[1][0]).toString())}}
                    style={{fontSize:20, width:"100%"}}/>
            </View>

        </View>)}

const estilos = StyleSheet.create({
    nome:{
        fontSize:28,
        borderColor:"#000",
        borderWidth:2,
        marginHorizontal:6,
        paddingHorizontal:6,
        paddingVertical:3,
        marginTop:8,
        borderRadius:10
    },
    viewHorizontal:{
        flexDirection:"row",
        flex:1,
        justifyContent:"space-between"
    },
    viewStyle:{        
        borderColor:"#000",
        borderWidth:2,
        marginHorizontal:6,
        paddingHorizontal:6,
        paddingVertical:3,
        marginTop:8,
        borderRadius:10
    },
    textStyle:{
        borderBottomColor:"black",
        borderBottomWidth:1
    },
})