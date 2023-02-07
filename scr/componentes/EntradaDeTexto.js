import React from "react"
import { TextInput } from "react-native-paper"

export default function EntradaDeTexto({label, value, onChangeText, secureTextEntry}){
    return (
    <TextInput 
        label={label}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        mode="outlined"
        outlineColor="#202020"
        activeOutlineColor="#202020"
        textColor="#202020"
        style={{backgroundColor:"#fff"}}>
    </TextInput>)
}