import React from "react";
import { Text, View, StyleSheet,useWindowDimensions  } from "react-native";
import RenderHTML from "react-native-render-html";
const magiasJson = require('../../../servicos/dados/magiasPT.json'); 


export default function DetalheMagias({item}){

    const { width } = useWindowDimensions();
    const source = {html: item.descricao};
    const arrayClasse = item.classes.split(',')
    

    return (<View style={estilos.cardMagia}>
            <View>
                <View style={estilos.cardNomeNivel}>
                <Text style={estilos.nomeMagia}>{item.nome}</Text>
                <Text style={{fontSize:18}}>nível: {item.nivel}</Text>
                </View>
                <View style={estilos.cardNomeClasse}>
                <Text style={estilos.textClasse}>Classes: </Text>
                {arrayClasse.map((key)=>{
                    return ( <Text style={estilos.cardClasse} key={key}> {key} </Text>)
                })}
                </View>
                <Text style={estilos.cardDescricao}>Alcance: {item.alcance}</Text>
                <View style={estilos.cardDescricao}>
                <RenderHTML  
                    contentWidth={width}
                    source={source}/>
                </View>
                </View>
        </View>)

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
        width:'93%'
    },
    nomeMagia:{
        fontSize:22,
        marginLeft:6,
    },
    cardNomeNivel:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginRight:6
    },
    cardNomeClasse:{
        flexDirection:'row',
        marginTop:15,
    }
})