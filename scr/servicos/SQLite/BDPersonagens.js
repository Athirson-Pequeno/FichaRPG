import { openDatabase, enablePromise } from "react-native-sqlite-storage";

enablePromise(true);

export const DBPersonagensConexao = async () =>{
    return openDatabase({name:'personagens-data.db', location:'default'});
};


export const criarTabelaPersonagens = async (db) => {

    const criar = "CREATE TABLE IF NOT EXISTS " +
    "Personagens " +
    "(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, caracteristicas TEXT, atributos TEXT, pericias TEXT);";

    return await db.executeSql(criar);
}




export const buscarPersonagens = async (db) =>{
    try{
        const todosPersonagens = []
        const resultados = await db.executeSql("SELECT * FROM Personagens ORDER BY id DESC;")
        resultados.forEach(resultado=>{
            for (let index = 0; index < resultado.rows.length; index++){
                todosPersonagens.push(resultado.rows.item(index))
            }
        });
        return todosPersonagens;
    } catch(erro){
        console.log(erro)
        throw Error('erro ao buscar');
    }
}

export const buscarPersonagem = async (db, idPersonagem) =>{
    try{
        const personagem = []
        const resultados = await db.executeSql(`SELECT * FROM Personagens WHERE id = ${idPersonagem};`)
        resultados.forEach(resultado=>{
            for (let index = 0; index < resultado.rows.length; index++){
                personagem.push(resultado.rows.item(index))
            }
        });
        return personagem;
    } catch(erro){
        console.log(erro)
        throw Error('erro ao buscar');
    }
}




export const salvarPersonagem =  async (db, personagem) =>{
    
    const salvar = `INSERT INTO Personagens (nome, caracteristicas, atributos, pericias) VALUES 
    ('${personagem.nome}', '${personagem.caracteristicas}', '${personagem.atributos}', '${personagem.pericias}');`

    return db.executeSql(salvar)

}

export const atualizarAtributosPersonagem = async (db, atributos, idPersonagem) =>{
    const atualizar = `UPDATE Personagens SET atributos = '${atributos}' WHERE id = ${idPersonagem}`

    return db.executeSql(atualizar)
}

export const atualizarPericiasPersonagem = async (db, pericias, idPersonagem) =>{
    const atualizar = `UPDATE Personagens SET pericias = '${pericias}' WHERE id = ${idPersonagem}`

    return db.executeSql(atualizar)
}

export const atualizarCaracteristicasPersonagem = async (db, caracteristicas, idPersonagem) =>{
    const atualizar = `UPDATE Personagens SET caracteristicas = '${caracteristicas}' WHERE id = ${idPersonagem}`

    return db.executeSql(atualizar)
}


export const atualizarNomePersonagem = async (db, nome, idPersonagem) =>{
    const atualizar = `UPDATE Personagens SET nome = '${nome} ' WHERE id = ${idPersonagem}`

    return db.executeSql(atualizar)
}