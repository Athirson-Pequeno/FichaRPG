import React,{useEffect, useState} from "react";
import { Text, TextInput, View, StyleSheet } from "react-native";
import { criarTabela, buscarAtributos, salvarAtributos, dbConexao, atualizarAtributos } from "../../../servicos/SQLite/BDAtributos";
import atibutoJson from "../../../servicos/dados/atributos.json"


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
        
        const array = listaAtributos    

        const novoAtr = {
            nome:item.nome,
            id:item.id,
            abreviacao:item.abreviacao,
            valor:parseInt(valorDigitado)
        }

        array.forEach((element, index)=>{
            if (element.id === item.id){
                console.log("macthhh!")
                console.log("item id==="+item.id)
                console.log("indexas==="+index)
                if(index > -1){
                    array.splice(index, 1, novoAtr)
                }
            }
        })

        setListaAtributos(array)
        console.log(listaAtributos)
        
        const db = await dbConexao();
        atualizarAtributos(db, novoAtr)

    }

    function buscarvalor(item){
        return item.valor.toString()
    }

    return (<>
        <View style={estilos.containerAtributos}>
            {listaAtributos.map((item)=>{ return (
                <View style={estilos.valContainer} key={item.id}>
                <Text style={estilos.text}>{item.abreviacao}</Text>
                <TextInput 
                keyboardType="numeric"
                defaultValue={item.valor.toString()} 
                style={estilos.valInput}
                value={()=>{item.valor.toString()}}
                onChangeText={(text)=>{atualizaAtributo(item, text.replace(/[^0-9]\s/g, ''))}}
                ></TextInput>
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