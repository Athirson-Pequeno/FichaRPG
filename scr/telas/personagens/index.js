import react, { useEffect, useState } from "react";
import { FlatList, View, Text, TouchableOpacity } from "react-native";
import RenderPersonagens from "./componentes/renderPersonagens";
import { DBPersonagensConexao , criarTabelaPersonagens , buscarPersonagens } from "../../servicos/SQLite/BDPersonagens";
import ModalAddPersonagem from "./componentes/modalAddPersonagem";

export default function TelaPersonagens(){

    const [listaDataPersonagens, setlistaDataPersonagens] = useState([])

    useEffect(() => {
        async function FluxoDBPersonagens(){

            try{

            const db = await DBPersonagensConexao();
            criarTabelaPersonagens(db);
            const listaPersonagens = await buscarPersonagens(db)
            
            if (!(listaPersonagens.length === 0)){
                setlistaDataPersonagens(listaPersonagens)
            }else{
                setlistaDataPersonagens(data)
            }
        }
            catch(erro){
                console.log(erro)
            }

        }
        FluxoDBPersonagens()
    },[])


    const data = [{
        nome:"Joao",
        classe:"Ladino",
        id:1,
        nivel: 2
    },{
        nome:"Pedro",
        classe:"Paladino",
        id:2,
        nivel: 2
    },{
        nome:"Ana",
        classe:"Mago",
        id:3,
        nivel: 2
    },{
        nome:"Camus",
        classe:"Feiticeiro",
        id:4,
        nivel: 2
    },]

    const cabeça = (
        <>
        <ModalAddPersonagem/>
        </>
        
        )
    
    return (<View>
        
        <FlatList 
        ListHeaderComponent={cabeça}
        data={listaDataPersonagens}
        renderItem={({item})=>(<RenderPersonagens item={item}/>)}
        keyExtractor={(item)=>item.id}
        />
        
        
    </View>)
}