import React,{useEffect, useState} from "react";
import { View, StyleSheet, FlatList, SafeAreaView, TextInput } from "react-native";
const magiasJson = require('../../servicos/dados/magiasPT.json');
import DetalheMagias from "./componentes/detalhesMagias";

export default function TelaMagias(){

const lista = []
const [repoMaster, setRepoMaster] = useState([]);
const [repoFilter, setRepoFilter] = useState([]);
const [pesquisa, setPesquisa] = useState('');


useEffect(()=>{ 
  dados()
},[]);

function dados(){
  magiasJson.dados.forEach((item)=>{
    lista.push(item)
  })
  setRepoMaster(lista)
  setRepoFilter(lista)
}

const pesquisar = (texto) =>{
  if(texto){
    const novaData = repoMaster.filter(
      function(item){
        if(item.nome){
          const itemDataNome = item.nome.toUpperCase();
          const textoData = texto.toUpperCase();
          return itemDataNome.indexOf(textoData) > -1;
        }
      });
      setRepoFilter(novaData);
      setPesquisa(texto);
    }else{
      setRepoFilter(repoMaster);
      setPesquisa(texto);
    }

}

  return (<SafeAreaView style={{flex:1}}>
    <View style = {estilos.container}>
      <TextInput 
      style       = {estilos.textInput}
      placeholder = "Pesquisar..."
      onChangeText={(text)=>pesquisar(text)}
      value={pesquisa}/>
    <FlatList
      data       = {repoFilter}
      style      = {{flex:1}}
      renderItem = {({item}) => ( <DetalheMagias item={item}/>)}/>
  </View>
  </SafeAreaView>)
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'center',
    justifyContent:'center'
  },
  botao:{
    backgroundColor: '#468F18',
    marginTop: 20,
    marginBottom: 30,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    width: '90%',
  },
  textoBotao:{
    fontWeight:'bold',
    fontSize:18
  },
  textInput: {
    height: 40,
    width:'95%',
    borderWidth: 1,
    paddingLeft: 20,
    margin: 5,
    borderColor: '#0066CC',
    borderRadius:6,
  },
  viewFlatlist:{
    borderRadius:6,
    flex:1
  }
 }
);