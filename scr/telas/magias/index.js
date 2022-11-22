import React,{useEffect, useState} from "react";
import { StyleSheet, FlatList, TextInput, StatusBar, View } from "react-native";
import SafeAreaView from 'react-native-safe-area-view';
import { Picker } from "@react-native-picker/picker";

import DetalheMagias from "./componentes/detalhesMagias";
import ModalDescriacao from "./componentes/modalDescricao";

const magiasJson = require('../../servicos/dados/magiasPT.json');
const classesJson = require('../../servicos/dados/classes.json')

export default function TelaMagias(){

const lista = []
const [repoMaster, setRepoMaster] = useState([]);
const [repoFilter, setRepoFilter] = useState([]);

const [textoPesquisa, setTextoPesquisa] = useState('');
const [classePesquisa, setClassePesquisa] = useState('');
const [nivelPesquisa, setNivelPesquisa] = useState('');

const [magiaSelecionada, setMagiaSelecionada] = useState({});

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

const pesquisar = (nome, classe, nivel) =>{

 if (nome || classe || nivel ){

  let letNome
  let letClasse
  let letNivel

   if (nome){
     letNome = nome.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"");
     console.log(letNome)
   }
   if(classe){
     letClasse =  classe.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"");
     console.log(letClasse)

   }
   if(nivel){
     letNivel = nivel.toString()
     console.log(letNivel)

   }

   
     const novaLista = repoMaster.filter(item =>{
       const itemDataNome = item.nome.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"");
       const itemDataClasse = item.classes.toUpperCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"");
       const itemDataNivel = item.nivel.toString();

       if (letNome && letClasse && letNivel){
        return (itemDataNome.indexOf(letNome) > -1) && (itemDataClasse.indexOf(letClasse) > -1) && (itemDataNivel.indexOf(letNivel) > -1 ) 
       }
      
       if(letNome){
        if (letNome && letNivel){
          return (itemDataNome.indexOf(letNome) > -1) && (itemDataNivel.indexOf(letNivel) > -1 ) 
        }
        if (letNome && letClasse){
          return (itemDataNome.indexOf(letNome) > -1) && (itemDataClasse.indexOf(letClasse) > -1) 
        }
       return itemDataNome.indexOf(letNome) > -1
      }

      if(letClasse){
        if (letClasse && letNivel){
          return (itemDataClasse.indexOf(letClasse) > -1) && (itemDataNivel.indexOf(letNivel) > -1 ) 
        }    
       return itemDataClasse.indexOf(letClasse) > -1
      }

      if(letNivel){
        return itemDataNivel.indexOf(letNivel) > -1
      }

     })

    //lista nome, lista nivel, lista classe })

     setRepoFilter(novaLista)
 }else{
   setRepoFilter(repoMaster)
 }

}



  return (<SafeAreaView style={estilos.containerSa}>
      <TextInput 
      style       = {estilos.textInput}
      placeholder = "Pesquisar..."
      value={textoPesquisa}
      onChangeText={(text)=>{
        setTextoPesquisa(text)
        pesquisar(text, classePesquisa, nivelPesquisa)
      }
      }
      />
      
      <View style={{flexDirection:"row"}}>
        
      
      <Picker
      style={{flex:1}}
      selectedValue={nivelPesquisa}
      onValueChange={(itemValor, itemIndex)=>{
        setNivelPesquisa(itemValor)
        pesquisar(textoPesquisa, classePesquisa, itemValor)
      }}
      >
        <Picker.Item label="Selecionar nível" value={false}/>
        <Picker.Item label="0" value="0"/>
        <Picker.Item label="1" value="1"/>
        <Picker.Item label="2" value="2"/>
        <Picker.Item label="3" value="3"/>
        <Picker.Item label="4" value="4"/>
        <Picker.Item label="5" value="5"/>
        <Picker.Item label="6" value="6"/>
        <Picker.Item label="7" value="7"/>
        <Picker.Item label="8" value="8"/>
        <Picker.Item label="9" value="9"/>

      </Picker>

      
      <Picker
      style={{flex:1}}
      selectedValue={classePesquisa}
      onValueChange={(itemValor, itemIndex)=>{
        if(itemValor === "Selecionar Classe"){
          itemValor = false
        }

        setClassePesquisa(itemValor)
        pesquisar(textoPesquisa, itemValor, nivelPesquisa)
      }}      
      >
        {classesJson.dados.map((item)=>{return <Picker.Item label={item.nome} value={item.nome} key={item.id}/>})}
      </Picker>

      </View>
    <FlatList
      data       = {repoFilter}
      renderItem = {({item}) => (<DetalheMagias item={item} setMagiaSelecionada={setMagiaSelecionada}/>)}
      keyExtractor={item => item.id} />
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
    borderColor: '#4A0100',
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