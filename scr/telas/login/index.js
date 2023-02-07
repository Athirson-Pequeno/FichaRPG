import React from "react"
import { useState } from "react"
import { Text, TouchableOpacity, View } from "react-native"
import EntradaDeTexto from "../../componentes/EntradaDeTexto"
import estilos from "./estilos"


export default function TelaLogin({navigation}){

    const [dados, setDados] = useState({email:"", senha:""})
    


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

        <TouchableOpacity style={[estilos.botao,{marginTop:6}]} onPress={()=>navigation.navigate('Rotas')}>
            <Text style={estilos.textoBotao}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[estilos.botao,{marginTop:6}]} onPress={()=>navigation.navigate('TelaCadastro')}>
            <Text style={estilos.textoBotao}>Cadastrar-se</Text>
        </TouchableOpacity>

     </View>
}