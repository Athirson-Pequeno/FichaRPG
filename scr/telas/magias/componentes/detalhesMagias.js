import React from "react";
import { Text, View, StyleSheet, TouchableOpacity  } from "react-native";


export default function DetalheMagias({item, setMagiaSelecionada}){

    const arrayClasse = item.classes.split(',')   
    const arraySubClasse = item.subclasses.split(',')   

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
                    {arrayClasse.map((key)=>{return ( <Text style={estilos.cardClasse} key={key}> {key} </Text>)})}
                </View>
                {(arraySubClasse != '') ? <View style={estilos.cardNomeClasse}><Text style={estilos.textClasse}>Sub-Classes: </Text>{arraySubClasse.map((key)=>{return ( <Text style={estilos.cardClasse} key={key}> {key} </Text>)})}</View> : <></>}
                {/* <Text style={estilos.cardDescricao}>Alcance: {item.alcance}</Text> */}
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
        justifyContent:'flex-start',
        alignSelf:"flex-start"
    },
    cardNomeENivel:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        
    }
    
})