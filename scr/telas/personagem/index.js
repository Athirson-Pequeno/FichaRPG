import React,{ useState, useEffect, useContext} from "react";
import { View, ScrollView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

//componentes da tela personagem
import Atributos from "./componentes/atributos";
import Pericias from "./componentes/pericias";
import Caracteristicas from "./componentes/caracteristicas";

//funcoes do banco de dados personagem
import { atualizarNomePersonagem ,atualizarCaracteristicasPersonagem ,atualizarPericiasPersonagem, atualizarAtributosPersonagem, DBPersonagensConexao, buscarPersonagem } from "../../servicos/SQLite/BDPersonagens";
import { CaracteristicasContext } from "../../contexts/CaracteristicasContext";

export default function TelaPersonagem(){
    //coleta os dados do personagem que sao passados pelas rotas
    const rota = useRoute()
    const { item } = rota.params;
    const idPersonagem = item.id
    const caracteristicas = JSON.parse(item.caracteristicas)
    
    
    //inicia os hooks das listas que serao usadas no render
    const [listaPericias, setListaPericias] = useState([])
    const [listaAtributos, setListaAtributos] = useState([])

    const {aleracao, setAlteracao} = useContext(CaracteristicasContext)



    useEffect(()=>{    
    
     async function fluxoDB(){
             try{
                //cria uma conexao com o banco de dados
                const db = await DBPersonagensConexao();
                //obtem os dados do personagem pelo id
                const dadosPersonagemDB = await buscarPersonagem(db, idPersonagem)
                //converter o texto salvo no banco de dados em um objeto
                const atributosPersonagemDB = JSON.parse(dadosPersonagemDB[0].atributos)                    
                const periciasPersonagemDB = JSON.parse(dadosPersonagemDB[0].pericias)

                //configura a lista de atributos
                setListaAtributos(atributosPersonagemDB)
                //configura a lista de pericias
                setListaPericias(periciasPersonagemDB)

                //atualiza as pericias com os valores do banco de dados
                atualizarPericias()
            
             }
             catch(error){
               console.log(error)
             }
            
     }                
     
     fluxoDB()


    },[])
    

    
    async function atualizarPericias(){

        //cria uma lista vazia onde sera adicionada as pericias
        const listaPushPericias = []
        
        
        //cria uma conexao com o banco de dados
        const db = await DBPersonagensConexao();
        //obtem os dados do personagem pelo id
        const dadosPersonagemDB = await buscarPersonagem(db, idPersonagem)
        //converter o texto salvo no banco de dados em um objeto
        const atributosDB = JSON.parse(dadosPersonagemDB[0].atributos)
        //pega o valor do JSON importado
        const arrayPericias = JSON.parse(dadosPersonagemDB[0].pericias)
  
       //cria uma nova lista de pericias para ser usada no render
        arrayPericias.forEach((item)=>{
            atributosDB.forEach((element)=>{
                if (element.abreviacao === item.modificador){
                    item.valor = element.valor,                       
                    //adicona o objeto criado na lisa de pericias
                    listaPushPericias.push(item)
                }})
        })

        //configura a lista de pericia para a nova lista criada
        setListaPericias(listaPushPericias)
      

    }   



    async function atualizarAtributos(itemNovo ,novoAtributo){
        
        //cria uma conexao com o banco de dados
        const db = await DBPersonagensConexao();

        //obtem os dados do personagem pelo id
        const dadosPersonagemDB = await buscarPersonagem(db, idPersonagem)
        
        //converter o texto salvo no banco de dados em um objeto
        const atributosPersonagemDB = JSON.parse(dadosPersonagemDB[0].atributos)

        //cria uma nova lista para receber os atributos
        const novaLista = []

        //configura a nova lista de atributo, é editado apenas o atributo mudado
        atributosPersonagemDB.forEach(item =>{
            //verifica qual atributo editado
            if(item.id === itemNovo.id ){
                //verifica se o valor recebido é válido
                if (!isNaN(parseInt (novoAtributo))){
                    //atualiza o valor
                    item.valor = parseInt( novoAtributo )
                }else{
                    //zera o valor pois o dado passado nao é correto
                    item.valor = 0
            }   
                //adiciona o item a lista
                novaLista.push(item)
            }else{
                //adiciona o item a lista
                novaLista.push(item)
            }
        })

        //converte a lista para string, necessario para salvar o objeto no banco de dados
        const novosAtributos = JSON.stringify( novaLista )

        //atualiza os atributos do personagem atual
        await atualizarAtributosPersonagem(db, novosAtributos, idPersonagem)

        //busca os dados atualizados
        const dadosPersonagem = await buscarPersonagem(db, idPersonagem)

        //tranformar os dados atualizados em objeto
        const atributosPersonagem = JSON.parse(dadosPersonagem[0].atributos)
        //configura a lista de atributos para os novos dados
        setListaAtributos(atributosPersonagem)
        
        //atualiza a lista de pericias
        atualizarPericias()

    }

    async function atualizarPericiasDB(itemNovo){

        const novaListaPericias = []

        //cria a conexão com o banco de dados
        const db = await DBPersonagensConexao()

        //busca os dados do personagem atual
        const dadosPersonagemDB = await buscarPersonagem(db, idPersonagem)


        const periciasPersonagemDB = JSON.parse(dadosPersonagemDB[0].pericias)

        periciasPersonagemDB.forEach((item)=>{
            if (item.id === itemNovo){
                item.selecionado = !item.selecionado
                novaListaPericias.push(item)
            }else{
                novaListaPericias.push(item)
            }
        })

        const novasPericias = JSON.stringify(novaListaPericias)

        await atualizarPericiasPersonagem(db, novasPericias, idPersonagem)

    }


    async function atualizarCaracteristicas(valorNovo, elemento){

        const db = await DBPersonagensConexao()

        const dadosPersonagemDB = await buscarPersonagem(db, idPersonagem)

        const caracteristicasDB = JSON.parse(dadosPersonagemDB[0].caracteristicas)
        
        caracteristicasDB[elemento] = valorNovo

        const novasCaracteristicas = JSON.stringify(caracteristicasDB)

        atualizarCaracteristicasPersonagem(db, novasCaracteristicas, idPersonagem)

        setAlteracao(!aleracao)

    }

    async function atualizarNome(novoNome){
        const db = await DBPersonagensConexao()

        atualizarNomePersonagem(db, novoNome, idPersonagem)

        setAlteracao(!aleracao)
    }

    return (<ScrollView >
 
    <Caracteristicas caracteristicas={caracteristicas} nome={item.nome} atualizarCaracteristicas={atualizarCaracteristicas} atualizarNome={atualizarNome}/>

    <View style={{flexDirection:"row", flex:1, borderTopColor:"black", borderTopWidth:5}}>
        {/* atributos do personagem */}
        
        <Atributos lista={listaAtributos} atualizarAtributos={atualizarAtributos} />
        {/* pericias do personagem */}
        <Pericias lista={listaPericias} atualizarPericiasDB={atualizarPericiasDB}/>
   </View>

   </ScrollView>)
}