import React,{useState, useEffect} from "react";
import { View, ScrollView } from "react-native";

import Atributos from "./componentes/atributos";
import Pericias from "./componentes/pericias";

import { criarTabela, buscarAtributos, salvarAtributos, dbConexao, atualizarAtributos } from "../../servicos/SQLite/BDAtributos";
import atibutoJson from "../../servicos/dados/atributos.json"
import periciasJson from "../../servicos/dados/pericias.json"

export default function TelaPersonagem(){

    const [listaPericias, setListaPericias] = useState([])
    const [listaAtributos, setListaAtributos] = useState([])
    const [valor, setValor] = useState()

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
                const atributosDB = await buscarAtributos(db);
                //faz a lista global de atributos receber os itens do banco de dados
                setListaAtributos(atributosDB)
                
                await atualizarPericias("no if")
                
                
                
            
              }else{
                //faz a lista global de atributos receber os itens do banco de dados
                setListaAtributos(atributos)
                await atualizarPericias("no else")
               
                
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
        atualizarPericias("atualiza")
        setValor(valorDigitado)
    }
    }


    
    async function atualizarPericias(){

        const listaPushPericias = []
        const array = periciasJson

        const db = await dbConexao();
        const atributosDB = await buscarAtributos(db);
  
        array.dados.forEach((item, itemIndex)=>{
            atributosDB.forEach((element)=>{
                if (element.abreviacao === item.modificador){
                    const textoAdd = `${item.nome} (${item.modificador})`
                    const objAtr ={
                        id:itemIndex,
                        texto: textoAdd,
                        valor: element.valor
                    }
                    listaPushPericias.push(objAtr)
              }
            })
        })
        
        setListaPericias(listaPushPericias)
      

    }   

    return (<ScrollView>
    {/* <Text>nome</Text>
    <Text>classe</Text>
    <Text>nivel</Text>
    <Text>vida</Text>
    <Text>Ca</Text>
    <Text>raca</Text>
    <Text>bonus proficiencia</Text>
    <Text>deslocamento</Text>
    <Text>dado de vida</Text> */}

    <View style={{flexDirection:"row", flex:1}}>
        <Atributos lista={listaAtributos} atualizaAtributo={atualizaAtributo} />
        <Pericias lista={listaPericias} valor={valor} listaa={listaAtributos}/>
   </View>

   </ScrollView>)
}