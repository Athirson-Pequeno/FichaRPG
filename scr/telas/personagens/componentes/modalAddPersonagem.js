import React, { useState, useEffect } from "react";
import { Modal,Text, TouchableOpacity, View, StyleSheet, TextInput } from "react-native";
import { Picker } from "@react-native-picker/picker";

const classesJson = require('../../../servicos/dados/classes.json')
const racaJson = require('../../../servicos/dados/raca.json')
const atributosJson = require('../../../servicos/dados/atributos.json')
const periciasJson = require('../../../servicos/dados/pericias.json')


export default function ModalAddPersonagem({salva}){
    
    const [modalVisivel, setModalVisivel] = useState(false)
    const [classeSelecionada, setClasseSelecionada] = useState()

    const [subclasseSelecionada, setsubClasseSelecionada] = useState()
    const [indexClasse, setIndexClasse] = useState(0)

    const [nomePersonagem, setNomePersonagem] = useState('')
    const [racaSelecionada, setRacaSelecionada] = useState()

    useEffect(()=>{
    },[])

    function CriarPersonagem(){
      
      
      //cria uma string com as caracteristicas do personagem para salvar no banco de dados
      const caracteristicas = JSON.stringify({
        Classe:classeSelecionada,
        Sub_Classe:subclasseSelecionada,
        Raça:racaSelecionada,
        Nível:0,
        Vida_Total:0,
        Vida_Temporária:0,
        Deslocamento:"0m",
        Bônus_de_Proficiência:"+0",
        Armadura:0,
        Dado_de_Vida:"1d6 + Const",
        Anotações:"Anotações importantes"
      })

      //cria uma string com os atributos do personagem para salvar no banco de dados
      const atributos = JSON.stringify(
        atributosJson.dados.map(item=>{
          const atributo = {
            nome:item.nome,
            abreviacao:item.abreviacao,
            valor:0,
            id:item.id
          }
          return atributo          
        })
      )

      //cria uma string com as pericias do personagem para salvar no banco de dados
      const listaPushPericias = []
      const arrayPericias = periciasJson
      const arrayAtributos = JSON.parse(atributos)

      arrayPericias.dados.forEach((item, itemIndex)=>{
        arrayAtributos.forEach((element)=>{
            if (element.abreviacao === item.modificador){                
                const objAtr ={
                    nome: item.nome,
                    modificador:item.modificador,
                    id:itemIndex,
                    valor: element.valor,
                    selecionado: false
                }
                //adicona o objeto criado na lisa de pericias
                listaPushPericias.push(objAtr)
          }
        })
    })
    const pericias = JSON.stringify(listaPushPericias)



      //cria um personagem para salvar no banco de dados
      const novoPersonagem = {
        nome:nomePersonagem,
        caracteristicas:caracteristicas,
        atributos:atributos,
        pericias:pericias
      }

      setModalVisivel(false)
      
      salva(novoPersonagem)
    }


    
return <>
    {/* botao adicionar */}
    <TouchableOpacity 
        style={estilos.botaoAdicionar}
        onPress={() => {setModalVisivel(true)}}>
     <Text style={estilos.textoAdicionar}>Adicionar</Text>
    </TouchableOpacity>


    {/* modal adicionar */}
    <View style={estilos.container}>
        <Modal 
            animationType="slide"
            transparent={true}
            visible={modalVisivel}
            onRequestClose={()=>setModalVisivel(false)}>

                <View style={estilos.centralizaModal}>
                <View style={estilos.modal}>
                <TextInput 
                style={estilos.textInput}
                placeholder={"Nome do personagem"}
                value={nomePersonagem}
                onChangeText={(text) =>{ 
                  setNomePersonagem(text)
                }}
                />


    {/* picker classe selecionada */}
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


    {/* picker subclasse selecionada */}
     <Picker
        selectedValue={subclasseSelecionada}
        onValueChange={(itemValor, itemIndex)=>{
            if(itemValor === "Selecionar Classe"){
                  itemValor = false
                }
            setsubClasseSelecionada(itemValor)
          }}>
        <Picker.Item label="Selecione uma subclasse" value="selecionar" ></Picker.Item>
        {classesJson.dados[indexClasse].subClasse.map((item)=>{return <Picker.Item label={item.nome} value={item.nome} key={item.id}/>})}
     </Picker>


      {/* picker raça */}
      <Picker
        selectedValue={racaSelecionada}
        onValueChange={(itemValor, itemIndex)=>{
            if(itemValor === "Selecionar Raça"){
                  itemValor = false
                }
            setRacaSelecionada(itemValor)
            }}>
        {racaJson.dados.map((item)=>{return <Picker.Item label={item.nome} value={item.nome} key={item.id}/>})}
     </Picker>
      

      {/* botao salvar personagem */}
     <TouchableOpacity  onPress={()=>CriarPersonagem()}>
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
        margin:6,
        backgroundColor:"#FFF",
        borderRadius:10,
        alignItems:"center"
      },
      container:{ 
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      },
      textInput:{
        borderWidth:3
      },
      textoAdicionar:{
      fontSize:40,
      alignSelf:"center",
    }
})