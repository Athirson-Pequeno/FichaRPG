import React,{useState} from "react";
import { Text, View, StyleSheet,useWindowDimensions, Modal, TouchableOpacity  } from "react-native";
import RenderHTML from "react-native-render-html";
const magiasJson = require('../../../servicos/dados/magiasPT.json'); 


export default function DetalheMagias({item, setMagiaSelecionada}){

    const { width } = useWindowDimensions();
    const source = {html: item.descricao};
    const arrayClasse = item.classes.split(',')

    

    return (
    <TouchableOpacity style={estilos.cardMagia} onPress={() => setMagiaSelecionada(item)}>
                <View style={estilos.cardConjunto}>
                    <View style={estilos.cardNomeENivel}>
                        <Text style={estilos.nomeMagia}>{item.nome}</Text>
                        <Text style={{fontSize:18}}>nível: {item.nivel}</Text>
                    </View>
                </View>
                <View style={estilos.cardNomeClasse}>
                    <Text style={estilos.textClasse}>Classes: </Text>
                    {arrayClasse.map((key)=>{
                        return ( <Text style={estilos.cardClasse} key={key}> {key} </Text>)
                    })}
                </View>
                <Text style={estilos.cardDescricao}>Alcance: {item.alcance}</Text>
                {/* <View style={estilos.cardDescricao}>
                 <RenderHTML  
                    contentWidth={width}
                    source={source}/> 
                </View> */}
        </TouchableOpacity>
)

}

const estilos = StyleSheet.create({

    cardClasse:{
        backgroundColor:'#fffb',
        borderRadius:6,
        margin:2
    },
    cardDescricao:{
        margin:6,
        borderColor:'#0003',
        borderWidth:2,
        padding:10,
        borderRadius:6,
    },
    textClasse:{
        fontSize:16,
        marginLeft:3,
    },
    cardMagia:{
        backgroundColor: '#99ccff',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        margin:6,
        padding:7,
        
    },
    nomeMagia:{
        fontSize:22,
        marginLeft:6,
    },
    cardConjunto:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    cardNomeClasse:{
        flexDirection:'row',
        marginTop:15,
        flexWrap:'wrap',
        justifyContent:'center'
    },
    cardNomeENivel:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        
    }
    
})