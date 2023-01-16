import { DBPersonagensConexao, atualizarCaracteristicasPersonagem, buscarPersonagem } from "./BDPersonagens";

export async function atualizarCaracteristicas(idPersonagem , valorNovo, elemento){
    
    const db = await DBPersonagensConexao()

    const dadosPersonagemDB = await buscarPersonagem(db, idPersonagem)

    const caracteristicasDB = JSON.parse(dadosPersonagemDB[0].caracteristicas)
    
    caracteristicasDB[elemento] = valorNovo

    const novasCaracteristicas = JSON.stringify(caracteristicasDB)

    atualizarCaracteristicasPersonagem(db, novasCaracteristicas, idPersonagem)

}