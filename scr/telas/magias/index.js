import React,{useEffect, useState} from "react";
import { View, StyleSheet, FlatList, SafeAreaView, TextInput, StatusBar } from "react-native";
import DetalheMagias from "./componentes/detalhesMagias";
import ModalDescriacao from "./componentes/modalDescricao";

const magiasJson = require('../../servicos/dados/magiasPT.json');

export default function TelaMagias(){

const lista = []
const [repoMaster, setRepoMaster] = useState([]);
const [repoFilter, setRepoFilter] = useState([]);
const [pesquisa, setPesquisa] = useState('');
const [magiaSelecionada, setMagiaSelecionada] = useState({})



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

  return (<SafeAreaView style={estilos.containerSa}>
      <TextInput 
      style       = {estilos.textInput}
      placeholder = "Pesquisar..."
      onChangeText={(text)=>pesquisar(text)}
      value={pesquisa}/>
    <FlatList
      data       = {repoFilter}
      renderItem = {({item}) => (<DetalheMagias item={item} setMagiaSelecionada={setMagiaSelecionada}/>)}
      keyExtractor={item => item.id}/>
    <ModalDescriacao  magiaSelecionada={magiaSelecionada} setMagiaSelecionada={setMagiaSelecionada}/>
    <StatusBar/>
  </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
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
  },
  containerSa: {
		flex: 1,
		alignItems: "stretch",
		justifyContent: "flex-start",
	},
 }
);