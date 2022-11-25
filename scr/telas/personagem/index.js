import React,{ useState, useEffect} from "react";
import { View, ScrollView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";

//componentes da tela personagem
import Atributos from "./componentes/atributos";
import Pericias from "./componentes/pericias";

//funcoes do banco de dados
import periciasJson from "../../servicos/dados/pericias.json"

//funcoes do banco de dados personagem
import { atualizarAtributosPersonagem, DBPersonagensConexao, buscarPersonagem } from "../../servicos/SQLite/BDPersonagens";

export default function TelaPersonagem(){
    //coleta os dados do personagem que sao passados pelas rotas
    const rota = useRoute()
    const { item } = rota.params;
    const idPersonagem = item.id
    const caracteristicas = JSON.parse(item.caracteristicas)
    
    //inicia os hooks das listas que serao usadas no render
    const [listaPericias, setListaPericias] = useState([])
    const [listaAtributos, setListaAtributos] = useState([])


    useEffect(()=>{    
    
     async function fluxoDB(){
             try{
                //cria uma conexao com o banco de dados
                const db = await DBPersonagensConexao();
                //obtem os dados do personagem pelo id
                const dadosPersonagemDB = await buscarPersonagem(db, idPersonagem)
                //converter o texto salvo no banco de dados em um objeto
                const atributosPersonagemDB = JSON.parse(dadosPersonagemDB[0].atributos)

                //configura a lista de atributos
                setListaAtributos(atributosPersonagemDB)

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
        //pega o valor do JSON importado
        const array = periciasJson


        //cria uma conexao com o banco de dados
        const db = await DBPersonagensConexao();
        //obtem os dados do personagem pelo id
        const dadosPersonagem = await buscarPersonagem(db, idPersonagem)
        //converter o texto salvo no banco de dados em um objeto
        const atributosDB = JSON.parse(dadosPersonagem[0].atributos)
  
       //cria uma nova lista de pericias para ser usada no render
        array.dados.forEach((item, itemIndex)=>{
            atributosDB.forEach((element)=>{
                if (element.abreviacao === item.modificador){
                    const textoAdd = `${item.nome} (${item.modificador})`
                    const objAtr ={
                        id:itemIndex,
                        texto: textoAdd,
                        valor: element.valor
                    }
                    //adicona o objeto criado na lisa de pericias
                    listaPushPericias.push(objAtr)
              }
            })
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

    return (<ScrollView>
    {/* <Text>nome</Text>
    <Text>classe</Text>
    <Text>nivel</Text>
    <Text>vida</Text>
    <Text>Ca</Text>
    <Text>raca</Text>
    <Text>bonus proficiencia</Text>
    <Text>deslocamento</Text>
    <Text>dado de vida</Text> */}


    {/* nome do personagem parte em desenvolvimento */}
    {/* <Text style={{fontSize:28, backgroundColor:'#ff6'}}>{item.nome}</Text>
    <Text style={{fontSize:28, backgroundColor:'#ff6'}}>{caracteristicas.classe}</Text>
    <Text style={{fontSize:28, backgroundColor:'#ff6'}}>{caracteristicas.subclasse}</Text>
    <Text style={{fontSize:28, backgroundColor:'#ff6'}}>{caracteristicas.raca}</Text>
    <Text style={{fontSize:28, backgroundColor:'#ff6'}}>{caracteristicas.nivel}</Text>
    <Text style={{fontSize:28, backgroundColor:'#ff6'}}>{caracteristicas.vidaTotal}</Text>
    <Text style={{fontSize:28, backgroundColor:'#ff6'}}>{caracteristicas.vidaTemporaria}</Text>
    <Text style={{fontSize:28, backgroundColor:'#ff6'}}>{caracteristicas.deslocamento}</Text>
    <Text style={{fontSize:28, backgroundColor:'#ff6'}}>{caracteristicas.bonusProf}</Text>
    <Text style={{fontSize:28, backgroundColor:'#ff6'}}>{caracteristicas.armadura}</Text>
    <Text style={{fontSize:28, backgroundColor:'#ff6'}}>{caracteristicas.dadoDeVida}</Text>
    <Text style={{fontSize:28, backgroundColor:'#ff6'}}>{caracteristicas.anotacoes}</Text> */}

    <View style={{flexDirection:"row", flex:1}}>
        {/* atributos do personagem */}
        <Atributos lista={listaAtributos} atualizarAtributos={atualizarAtributos} />
        {/* pericias do personagem */}
        <Pericias lista={listaPericias} />
   </View>

   </ScrollView>)
}