import { enablePromise, openDatabase, SQLiteDatabase } from 'react-native-sqlite-storage';



const nomeTabela = 'atributosData';

enablePromise(true);

export const dbConexao = async () => {
  return openDatabase({ name: 'todo-data.db', location: 'default' });
};


export async function criarTabela(db){
  // create table if not exists
  const query = "CREATE TABLE IF NOT EXISTS " +
  "Atributos "+
  "(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, abreviacao TEXT);";

  await db.executeSql(query);
  console.log("tabela Atributos criada")
};



export const buscarAtributos = async(db) => {
  try {
    const todosOsItens = [];
    const results = await db.executeSql("SELECT * FROM Atributos ORDER BY id DESC;");
    results.forEach(result => {
          for (let index = 0; index < result.rows.length; index++) {
            todosOsItens.push(result.rows.item(index))
          }
        });
        return todosOsItens;
      } catch (error) {
        console.error(error);
        throw Error('erro ao buscar');
      }
    };
    

    export const salvarAtributos = async (db, atributo) => {
      const salvarItens =
      "INSERT INTO Atributos (nome, abreviacao) VALUES " +
        atributo.map(i => `('${i.nome}', '${i.abreviacao}')`).join(',');
    
      return db.executeSql(salvarItens);
    };
  