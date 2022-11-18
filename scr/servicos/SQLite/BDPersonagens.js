import { openDatabase, enablePromise } from "react-native-sqlite-storage";

enablePromise(true);

export const DBPersonagensConexao = async () =>{
    return openDatabase({name:'personagens-data.db', location:"default"});
};

export const criarTabelaPersonagens = async (db) => {

    const criar = "CREATE TABLE IF NOT EXISTS " +
    "Personagens " +
    "(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, caracteristicas TEXT, atributos TEXT);";

    console.log("Tabela personagens criada")
    return db.executeSql(criar);
}

export const buscarPersonagens = async (db) =>{

    try{
        const todosPersonagens =[]
        const resultados = await db.executeSql("SELECT * FROM Personagens ORDER BY id DESC;")
        resultados.forEach(resultado=>{
            for (let i = 0; i < resultado.rows.lenght; i++){
                todosPersonagens.push(resultado.rows.item(i))
            }
        });
        return todosPersonagens;
    }
    catch(erro){
        console.log(erro)
        throw Error('erro ao buscar');
    }
}