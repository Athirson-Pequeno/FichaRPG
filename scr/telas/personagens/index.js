import { useEffect, useState, useContext } from "react";
import { FlatList, View } from "react-native";
import RenderPersonagens from "./componentes/renderPersonagens";
import { DBPersonagensConexao, criarTabelaPersonagens, buscarPersonagens, salvarPersonagem } from "../../servicos/SQLite/BDPersonagens";
import ModalAddPersonagem from "./componentes/modalAddPersonagem";
import { CaracteristicasContext } from "../../contexts/CaracteristicasContext";


export default function TelaPersonagens(){

    const [listaDataPersonagens, setlistaDataPersonagens] = useState([])
    

    const {aleracao, setAlteracao} = useContext(CaracteristicasContext)

    useEffect(() => {

        async function FluxoDBPersonagens(){

            try{
            //cria uma conexao com o banco de dados
            const db = await DBPersonagensConexao();

            //cria a tabela personagens
            criarTabelaPersonagens(db);

            //busca os personagens
            const listaPersonagens = await buscarPersonagens(db)

            //configura a lista com o resultado do banco de dados
            setlistaDataPersonagens(listaPersonagens)
            
        }
            catch(erro){
                console.log(erro)
            }

        }
        FluxoDBPersonagens()
    },[aleracao])


    async function salva(item){
        //inicia conexão com o banco de dados
        const db = await DBPersonagensConexao();

        //salvaPersonagem
        salvarPersonagem(db, item)

        //busca os personagens salvos
        const listaPersonagens = await buscarPersonagens(db)

        //atualiza lista de personagens
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