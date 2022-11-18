import React, { useState, useEffect } from "react";
import { Modal,Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

const classesJson = require('../../../servicos/dados/classes.json')


export default function ModalAddPersonagem(){
    
    const [modalVisivel, setModalVisivel] = useState(false)
    const [classeSelecionada, setClasseSelecionada] = useState()
    const [subclasseSelecionada, setsubClasseSelecionada] = useState()
    const [indexClasse, setIndexClasse] = useState(0)

    useEffect(()=>{
    },[])

    
return <>
    <TouchableOpacity 
        style={estilos.botaoAdicionar}
        onPress={() => {setModalVisivel(true)}}>
     <Text style={{fontSize:40, alignSelf:"center"}}>Adicionar</Text>
    </TouchableOpacity>

    <View style={estilos.container}>
        <Modal 
            animationType="slide"
            transparent={true}
            visible={modalVisivel}
            onRequestClose={()=>setModalVisivel(false)}>

                <View style={estilos.centralizaModal}>
                <View style={estilos.modal}>
                <TextInput style={estilos.textInput}placeholder={"Nome do personagem"}/>
    <Picker
        selectedValue={classeSelecionada}
        onValueChange={(itemValor, itemIndex)=>{
            if(itemValor === "Selecionar Classe"){
                  itemValor = false
                }
            setClasseSelecionada(itemValor)
            setIndexClasse(itemIndex)
            }}>
        {classesJson.dados.map((item)=>{return <Picker.Item label={item.nome} value={item.nome} key={item.id}/>})}
     </Picker>

     <Picker
        selectedValue={subclasseSelecionada}
        onValueChange={(itemValor, itemIndex)=>{
            if(itemValor === "Selecionar Classe"){
                  itemValor = false
                }
            setsubClasseSelecionada(itemValor)
          }}>
        {classesJson.dados[indexClasse].subClasse.map((item)=>{return <Picker.Item label={item.nome} value={item.nome} key={item.id}/>})}
     </Picker>

     <TouchableOpacity  onPress={()=>setModalVisivel(false)}>
        <Text style={estilos.botaoSair}>Salvar</Text>
     </TouchableOpacity>
    </View>
   </View>
  </Modal>
 </View>
</>}


const estilos = StyleSheet.create({
    modal: {
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 16,
        paddingTop: 16,
        paddingBottom: 32,
        marginTop: 8,
        marginHorizontal: 16,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10,
        flex: 1,
      },
      botaoSair:{
        backgroundColor:'#0f0',
        padding:15,
        borderRadius:6,
        marginTop:20
      },
      centralizaModal: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end",
      },
      botaoAdicionar:{
        borderColor:"#fff",
        borderWidth:3,
        margin:6
      },
      container:{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textInput:{
        borderWidth:3
    }
})