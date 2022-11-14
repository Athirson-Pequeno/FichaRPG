import React,{useEffect, useState} from "react";
import { Text, TextInput, View, StyleSheet, FlatList } from "react-native";
import { criarTabela, buscarAtributos, salvarAtributos, dbConexao, atualizarAtributos } from "../../../servicos/SQLite/BDAtributos";
import atibutoJson from "../../../servicos/dados/atributos.json"
import RenderAtributos from "./renderAtributos";


export default function Atributos(){

    const [listaAtributos, setListaAtributos] = useState([])

    useEffect(()=>{
    
     async function fluxoDB(){
             try{
                //cria uma conexao com o banco de dados
               const db = await dbConexao();
               //cria tabela atributos
               criarTabela(db);
               //busca os atributos salvos
               const atributos = await buscarAtributos(db);
    
               //verifica se tem atributos salvos
               if (atributos.length === 0){
                console.log(atibutoJson.dados.length)
                const listaPush = []
                atibutoJson.dados.forEach((item)=>{
                    const objAtr={
                        nome:item.nome,
                        abreviacao:item.abreviacao,
                        valor:0
                    }
                    
                    listaPush.push(objAtr)

                })
                //salva os atributos com o atributo valor
                salvarAtributos(db, listaPush.reverse())
                //busca os atributos no banco de dados
                const atributos = await buscarAtributos(db);
                //faz a lista global de atributos receber os itens do banco de dados
                setListaAtributos(atributos)
              }else{
                //faz a lista global de atributos receber os itens do banco de dados
                setListaAtributos(atributos)
              }
             }
             catch(error){
               console.log(error)
             }
     }                
     fluxoDB()
    },[])
    

    async function atualizaAtributo(item, valorDigitado){
        
        
        if(!isNaN(parseInt(valorDigitado))){
    
        const array = listaAtributos    
        const novoAtr = {
            nome:item.nome,
            id:item.id,
            abreviacao:item.abreviacao,
            valor:parseInt(valorDigitado)
        }

        array.forEach((element, index)=>{
            if (element.id === item.id){
                if(index > -1){
                    array.splice(index, 1, novoAtr)
                }
            }
        })

        setListaAtributos(array)        
        const db = await dbConexao();
        atualizarAtributos(db, novoAtr)

    }
    }


    return (<>
        <View style={estilos.containerAtributos}>
        <FlatList
        
        data={listaAtributos}
        renderItem={({item}) => <RenderAtributos item={item} atualizaAtributo={atualizaAtributo}/>}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        />  
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