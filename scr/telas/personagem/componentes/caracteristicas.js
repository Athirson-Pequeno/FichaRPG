import React, {useState} from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";
import RenderCaracteristicas from "./renderFlatlist/renderCaracteristicas";

import estilo from "./estilos/estilos";
import ComponenteCaracteristica from "../../../componentes/ComponenteCaracteristica";


export default function caracteristicas({personagem, atualizarNome}){

    const [nomePersonagem, setNomePersonagem] = useState(personagem.nome);
    const caracteristicas = JSON.parse(personagem.caracteristicas)
    const id = personagem.id


    return (<>

    <View style={{backgroundColor:"#80808030", margin:6, borderRadius:12}}>
    <View style={estilo.containerRender}>
        <View>
            <Text style={estilos.textStyle}>Nome</Text>
                <TextInput
                    placeholder={nomePersonagem}
                    value={nomePersonagem}
                    onChangeText={text => {
                        setNomePersonagem(text)
                        atualizarNome(text)
                    }}
                    style={{fontSize:28}}/>
       </View>
    </View>

    <View style={{flexDirection:"row"}}>
    <ComponenteCaracteristica 
    descricao="Classe" 
    valor={caracteristicas.classe.toString()}
    elemento="classe"
    idPersonagem={id}
    editavel={false}/>

    <ComponenteCaracteristica 
    descricao="Sub Classe" valor={caracteristicas.sub_classe.toString()}
    elemento="sub_classe"
    idPersonagem={id}
    editavel={false}/>
    </View>

    <View style={{flexDirection:"row"}}>
    <ComponenteCaracteristica 
    descricao="Raça" 
    valor={caracteristicas.raca.toString()}
    elemento="raca"
    idPersonagem={id}
    editavel={false}/>

    <ComponenteCaracteristica 
    descricao="Nível" 
    valor={caracteristicas.nivel.toString()}
    elemento="nivel"
    idPersonagem={id}
    editavel={true}/>
    </View>

    <View style={{flexDirection:"row"}}>
    <ComponenteCaracteristica 
    descricao="Vida Total" 
    valor={caracteristicas.vida_total.toString()}
    elemento="vida_total"
    idPersonagem={id}
    editavel={true}/>

    <ComponenteCaracteristica 
    descricao="Vida Temporária" 
    valor={caracteristicas.vida_temporaria.toString()}
    elemento="vida_temporaria"
    idPersonagem={id}
    editavel={true}/>
    </View>


    <View style={{flexDirection:"row"}}>
    <ComponenteCaracteristica 
    descricao="Deslocamento" 
    valor={caracteristicas.deslocamento.toString()}
    elemento="deslocamento"
    idPersonagem={id}
    editavel={true}/>

    <ComponenteCaracteristica 
    descricao="Bônus de Proficiência" 
    valor={caracteristicas.bonus_de_proficiencia.toString()}
    elemento="bonus_de_proficiencia"
    idPersonagem={id}
    editavel={true}/>
    </View>

    <View style={{flexDirection:"row"}}>
    <ComponenteCaracteristica 
    descricao="Armadura" 
    valor={caracteristicas.armadura.toString()}
    elemento="armadura"
    idPersonagem={id}
    editavel={true}/>

    <ComponenteCaracteristica 
    descricao="Dado de Vida" 
    valor={caracteristicas.dado_de_vida.toString()}
    elemento="dado_de_vida"
    idPersonagem={id}
    editavel={true}/>
    </View>
    </View>

    </>)
}

const estilos = StyleSheet.create({
    nome:{
        fontSize:28,
        borderColor:"#000",
        borderWidth:2,
        marginHorizontal:6,
        paddingHorizontal:6,
        paddingVertical:3,
        marginTop:8,
        borderRadius:10
    },
    viewHorizontal:{
        flexDirection:"row",
        flex:1,
        justifyContent:"space-between"
    },
    viewStyle:{        
        borderColor:"#000",
        borderWidth:2,
        marginHorizontal:6,
        paddingHorizontal:6,
        paddingVertical:3,
        marginTop:8,
        borderRadius:10
    },
    textStyle:{
        borderBottomColor:"black",
        borderBottomWidth:1
    },
})