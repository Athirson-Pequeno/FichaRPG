import { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import RenderPersonagens from "./componentes/renderPersonagens";
import { DBPersonagensConexao , criarTabelaPersonagens , buscarPersonagens, salvarPersonagem } from "../../servicos/SQLite/BDPersonagens";
import ModalAddPersonagem from "./componentes/modalAddPersonagem";

export default function TelaPersonagens(){

    const [listaDataPersonagens, setlistaDataPersonagens] = useState([])

    useEffect(() => {

        async function FluxoDBPersonagens(){

            try{
            //cria uma conexao com o banco de dados
            const db = await DBPersonagensConexao();
            //cria a tabela personagens
            criarTabelaPersonagens(db);
            //busca os personagens
            const listaPersonagens = await buscarPersonagens(db)
            setlistaDataPersonagens(listaPersonagens)
            
        }
            catch(erro){
                console.log(erro)
            }

        }
        FluxoDBPersonagens()
    },[])

    async function salva(item){

        const resultado = []
        resultado.push(item)
        console.log(resultado)

        const db = await DBPersonagensConexao();
        salvarPersonagem(db, resultado)

        const listaPersonagens = await buscarPersonagens(db)
        console.log(listaPersonagens)
        setlistaDataPersonagens(listaPersonagens)


        
    }


    const head = (<ModalAddPersonagem salva={salva}/>)
    
    return (<View>
        <FlatList 
        ListHeaderComponent={head}
        data={listaDataPersonagens}
        renderItem={({item})=>(<RenderPersonagens item={{...item}}/>)}
        keyExtractor={(item)=>item.id}
        />
        
        
    </View>)
}