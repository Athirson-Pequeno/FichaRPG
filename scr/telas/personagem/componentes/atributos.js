import React,{useEffect, useState} from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { criarTabela, buscarAtributos, salvarAtributos, dbConexao } from "../../../servicos/SQLite/BDAtributos";
import atibutoJson from "../../../servicos/dados/atributos.json"


export default function Atributos(){

    const [listaAtributos, setListaAtributos] = useState([])

    useEffect(()=>{
    
     async function fluxoDB(){
             try{
               const db = await dbConexao();
               criarTabela(db);
               const atributos = await buscarAtributos(db);
    
               if (atributos.length === 0){
                salvarAtributos(db, atibutoJson.dados)
                const atributos = await buscarAtributos(db);
                setListaAtributos(atributos)
                console.log(listaAtributos)
              }else{
                setListaAtributos(atributos)
              }
             }
             catch(error){
               console.log(error)
             }
     }                
     fluxoDB()
    },[])
    
    

    return (<>
        <View style={estilos.containerAtributos}>
            {listaAtributos.map((item)=>{ return (
                <View style={estilos.valContainer} key={item.id}>
                <Text style={estilos.text}>{item.abreviacao}</Text>
                <TextInput defaultValue={item.id.toString()} style={estilos.valInput}></TextInput>
                </View>)
            })}
        </View>
        </>
)}

const estilos = StyleSheet.create({
    valContainer:{
        flexDirection: 'row',
        marginBottom:5
    },
    valInput:{
        borderWidth: 3,
        flex:1,
        borderRadius:6,
        paddingHorizontal:8,
        
    },
    containerAtributos:{
        flex:1,
        padding:10,
        borderWidth:1,
        margin:6
    },
    text:{
        flex:2
    }
})