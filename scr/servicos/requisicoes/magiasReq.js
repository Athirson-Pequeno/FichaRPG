import api from "../api";


export async function listaMagias(){
    try{
        const resultado = await api.get(`/api/spells`);
        return resultado.data;

    }catch(error){
        console.log(error)
        return[]
    }   
}

export async function detalhesMagia(url){
    try{
        const resultado = await api.get(`${url}`);
        return resultado.data;
    }catch(error){
        console.log(url)
        return[]
    }   
}