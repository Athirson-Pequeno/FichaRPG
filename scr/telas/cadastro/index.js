import React from "react"
import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import EntradaDeTexto from "../../componentes/EntradaDeTexto"
import estilos from "./estilos"
import { cadastrar } from "../../servicos/firebase/requisicoesFirebase"


export default function TelaCadastro({navigation}){

    const [dados, setDados] = useState({email:"", senha:"", confirmaSenha:""})
    


    return <View style={{padding:15}}>

        <EntradaDeTexto 
            label={"Email"}
            value={dados.email}
            onChangeText={(text)=>{setDados({
                ...dados,
                email:text})}}
            secureTextEntry={false}
        />
        
        <EntradaDeTexto 
            label={"Senha"}
            value={dados.senha}
            onChangeText={(text)=>{setDados({
                ...dados,
                senha:text})}}
            secureTextEntry={true}
        />

           <EntradaDeTexto 
            label={"Confirmar Senha"}
            value={dados.confirmaSenha}
            onChangeText={(text)=>{setDados({
                ...dados,
                confirmaSenha:text})}}
            secureTextEntry={true}
        />


        <TouchableOpacity style={[estilos.botao,{marginTop:6}]} onPress={()=>{
            
            cadastrar(dados.email,dados.senha)}}>
            <Text style={estilos.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>

     </View>
}