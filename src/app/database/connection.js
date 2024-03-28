import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.mysql_host || 'localhost',
  port: process.env.mysql_port || 3306,
  user: process.env.mysql_user || 'root',
  password: process.env.mysql_pass || '',
  database: process.env.mysql_db || "bd_copa",
});

connection.connect();

/**
 * Executa um código sql com ou sem valores
 * @param {string} sql Instrução SQL a ser executada 
 * @param {string = id || [selecao, id]} values Valores a serem passados para o SQL
 * @param {string} messageReject Mensagem a ser exibida 
 * @returns Objeto da Promise
 */
const queries = (sql, values = '', messageReject ) => {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, result) => {
      if (error) return reject(messageReject);
      const row = JSON.parse(JSON.stringify(result));
      return resolve(row);
    });
  });
}

//export {connection, queries};
export default queries;
