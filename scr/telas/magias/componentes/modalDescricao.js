import React, {useEffect, useState} from "react";
import { Modal, Text, StyleSheet, View, TouchableOpacity, useWindowDimensions, ScrollView } from "react-native";
import RenderHTML from "react-native-render-html";

export default function ModalDescriacao({magiaSelecionada, setMagiaSelecionada}){
  
  useEffect(()=>{
      if(magiaSelecionada.id){
          preencherModal()
          setModalVisivel(true)        
      }
  },[magiaSelecionada.id])

const [modalVisivel, setModalVisivel] = useState(false)
const [upcast, setUpcast] = useState('')

//preenche renderHTML
const { width } = useWindowDimensions();
const source = {html:  `<p style="font-size:16px;">${magiaSelecionada.descricao}</p>`};

//preenche o modal com os dados da mágia
function preencherModal(){

  setUpcast(magiaSelecionada.upcast)
}

//limpa os dados da mágia
function limpaModal(){
  setUpcast('')
  setMagiaSelecionada({})
  setModalVisivel(false)
}

    return(<>
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisivel}    
    onRequestClose={()=> {setModalVisivel(false)}}>
        <View style={estilos.centralizaModal}>
            <ScrollView showsVerticalScrollIndicator = {false}>
                <View style={estilos.modal}>
                    <Text style={estilos.textNome}>{magiaSelecionada.nome}</Text>
                    <Text style={estilos.text}>Alcance: {magiaSelecionada.alcance}</Text>
                    <Text style={estilos.text}>Componentes: {magiaSelecionada.componentes}</Text>
                    <Text style={estilos.text}>Duração: {magiaSelecionada.duracao}</Text>
                    <View style={estilos.cardDescricao}>
                    <RenderHTML  
                    contentWidth = {width}
                    source       = {source}/>
                    
                    {(upcast) ?
                      <View style={estilos.cardUpcast}>
                      <Text style={estilos.text}>Em níveis superiores</Text>
                      <Text style={estilos.textUp}>{upcast}</Text>
                      </View> : <></>}  
                    </View>
          <TouchableOpacity onPress = {()=>limpaModal()} style={estilos.botaoSair}>
         <Text>Sair</Text>
        </TouchableOpacity>
       </View>
      </ScrollView>
     </View>
    </Modal>
   </>) 
}

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
      },
      botaoSair:{
        backgroundColor:'#f00',
        padding:15,
        borderRadius:6,
        marginTop:20
      },
      centralizaModal: {
        flex: 1,
        flexDirection: "row",
        alignItems: "flex-end"
      },
      cardDescricao:{
        borderWidth:3,
        borderRadius:6,
        padding:8,
        paddingTop:0
      },
      cardUpcast:{
        borderRadius:6,
        borderTopWidth:3
      },
      text:{
        fontSize:18
      },
      textUp:{
        fontSize:16
      },
      textNome:{
        fontSize:30,
        alignSelf:'center',
        marginBottom:20
      }
})