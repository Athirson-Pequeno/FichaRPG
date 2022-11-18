import { enablePromise, openDatabase } from 'react-native-sqlite-storage';


enablePromise(true);

export const dbConexao = async () => {
  return openDatabase({ name: 'atributos-data.db', location: 'default' });
};


export async function criarTabela(db){
  const criar = "CREATE TABLE IF NOT EXISTS " +
  "Atributos "+
  "(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, abreviacao TEXT, valor INTEGER);";

  await db.executeSql(criar);
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
      const salvarItens = "INSERT INTO Atributos (nome, abreviacao, valor) VALUES " +
        atributo.map(i => `('${i.nome}', '${i.abreviacao}', ${i.valor})`).join(',');
    
      return db.executeSql(salvarItens);
    
    };

export const atualizarAtributos = async (db, atributo) =>{

    const atualizarItem = `UPDATE Atributos SET nome = '${atributo.nome}', abreviacao = '${atributo.abreviacao}', valor = ${atributo.valor} WHERE id = ${atributo.id};`

    return db.executeSql(atualizarItem)
  }