import { auth } from "../../config/firebase";
import { createUserWithEmailAndPassword, } from "firebase/auth/react-native";

export async function cadastrar(email, senha){
    const resultado = await createUserWithEmailAndPassword(auth, email, senha)
    .then((dadosUser) => {
        console.log(dadosUser._tokenResponse.localId)
        return "sucesso"
    }).catch((error) => {
        console.log(error)
        return "erro"
    })

    return resultado
}