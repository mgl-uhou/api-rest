import mysql from "mysql";
import dotenv from "dotenv";
dotenv.config();

const connection = mysql.createConnection({
  host: process.env.mysql_host || 'localhost',
  port: process.env.mysql_port || 3306,
  user: process.env.mysql_user || 'root',
  password: process.env.mysql_pass || ''
});

connection.connect();

const callback = (error) => {
  if(error) throw new Error(error.message);
}
try{
  connection.query(
    `create database if not exists ${process.env.mysql_db}
    default character set utf8mb3
    default collate utf8mb3_unicode_ci;`, callback);

  connection.query(`use ${process.env.mysql_db};`, callback);

  connection.query(
    `create table if not exists selecoes(
      id int primary key auto_increment,
      selecao varchar(25) not null,
      grupo char(1) not null
    );`, callback);

  console.log("Base de dados e tabela criadas.");
}catch(error){
  console.log(error.message);
}

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
