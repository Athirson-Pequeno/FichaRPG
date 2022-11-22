import { enablePromise, openDatabase } from 'react-native-sqlite-storage';


enablePromise(true);

export const dbConexao = async () => {
  return openDatabase({ name: 'atributos-data.db', location: 'default' });
};


export const criarTabela =  async (db) =>{

  const criar = "CREATE TABLE IF NOT EXISTS " +
  "Atributos "+
  "(id INTEGER PRIMARY KEY AUTOINCREMENT, nome TEXT, abreviacao TEXT, valor INTEGER);";

  return await db.executeSql(criar);
};



export const buscarAtributos = async(db) => {
  try {
    const todosOsItens = [];
    const resultados = await db.executeSql("SELECT * FROM Atributos ORDER BY id DESC;");
    resultados.forEach(resultado => {
          for (let index = 0; index < resultado.rows.length; index++) {
            todosOsItens.push(resultado.rows.item(index))
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
        atributo.map(item => `('${item.nome}', '${item.abreviacao}', ${item.valor})`).join(',');
    
      return db.executeSql(salvarItens);
    
    };




export const atualizarAtributos = async (db, atributo) =>{

    const atualizarItem = `UPDATE Atributos SET nome = '${atributo.nome}', abreviacao = '${atributo.abreviacao}', valor = ${atributo.valor} WHERE id = ${atributo.id};`

    return db.executeSql(atualizarItem)
  }