import React, {useContext} from "react";
import { useEffect } from "react";
import { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import { atualizarCaracteristicas } from "../servicos/SQLite/SalvarDados";
import { CaracteristicasContext } from "../contexts/CaracteristicasContext";
import estilo from "../telas/personagem/componentes/estilos/estilos";


export default function ComponenteCaracteristica({descricao, valor, elemento, idPersonagem, editavel}){

    console.log(descricao, valor, elemento, idPersonagem)

    const [valorComponente, setValorComponente] = useState()    
    const {alteracao, setAlteracao} = useContext(CaracteristicasContext)

    useEffect(()=>{
        setValorComponente(valor)
    },[])
    
    async function atualizar(valorNovo){
        await atualizarCaracteristicas(idPersonagem, valorNovo, elemento)
        setAlteracao(!alteracao)
    }

    return <View style={estilo.containerRender}>
                <Text style={estilo.textStyle}>{ descricao }</Text>
                    <TextInput
                        value={ valorComponente }
                        multiline={true}
                        editable={editavel}
                        onChangeText={text => 
                            {
                                setValorComponente(text)
                                atualizar(text)
                            }
                        }
                        style={estilo.inputTextSyle}/>         

    </View>
}
