import React, {useEffect, useState} from "react";
import { Modal, Text, StyleSheet, View, TouchableOpacity, useWindowDimensions, ScrollView } from "react-native";
import RenderHTML from "react-native-render-html";

export default function ModalDescriacao({magiaSelecionada, setMagiaSelecionada}){

const [modalVisivel, setModalVisivel] = useState(false)
const { width } = useWindowDimensions();
const source = {html: magiaSelecionada.descricao};

useEffect(()=>{
    if(magiaSelecionada.id){
        setModalVisivel(true)
        console.log(magiaSelecionada.descricao)      
    }
},[magiaSelecionada])

    return(<>
    <Modal
    animationType="slide"
    transparent={true}
    visible={modalVisivel}    
    onRequestClose={()=> {setModalVisivel(false)}}>
        <View style={estilos.centralizaModal}>
            <ScrollView showsVerticalScrollIndicator = {false}>
                <View style={estilos.modal}>
                    <RenderHTML  
                    contentWidth = {width}
                    source       = {source}/>
          <TouchableOpacity onPress = {()=>setModalVisivel(false)} style   = {estilos.botaoSair}>
         <Text>sair</Text>
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
})