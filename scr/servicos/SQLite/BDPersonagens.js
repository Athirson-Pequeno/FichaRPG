import { openDatabase, enablePromise } from "react-native-sqlite-storage";

enablePromise(true);

export const DBPersonagensConexao = async () =>{
    return openDatabase({name:'personagens-data.db', location:'default'});
};

export const criarTabelaPersonagens = async (db) => {

    const criar = "CREATE TABLE IF NOT EXISTS " +
    "Personagens " +
    "(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, caracteristicas TEXT, atributos TEXT);";

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




export const salvarPersonagem =  async (db, personagem) =>{
    
    const salvar = "INSERT INTO Personagens (nome, caracteristicas, atributos) VALUES " +
    personagem.map( item => `('${item.nome}', '${item.caracteristicas}', '${item.atributos}')`).join(',');

    return db.executeSql(salvar)

}