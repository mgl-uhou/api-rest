import connection from "../database/connection.js";

class selecao_repository {
  // CRUD
  create(selecao) {
    const sql = "INSERT INTO selecoes SET ?;";
    return new Promise((resolve, reject) => {
      connection.query(sql, selecao, (error, result) => {
        if (error) return reject("Couldn't register.");

        // fazer o parse dos resultados
        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }

  findAll() {
    const sql = "SELECT * FROM selecoes;";
    return new Promise((resolve, reject) => {
      connection.query(sql, (error, result) => {
        if (error) return reject("Couldn't be found.");

        // fazer o parse dos resultados
        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }

  findById(id) {
    const sql = "SELECT * FROM selecoes WHERE id=?;";
    return new Promise((resolve, reject) => {
      connection.query(sql, id, (error, result) => {
        if (error) return reject("Couldn't be found.");

        // fazer o parse dos resultados
        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }

  update(selecao, id) {
    const sql = "UPDATE selecoes SET ? WHERE id=?;";
    return new Promise((resolve, reject) => {
      connection.query(sql, [selecao, id], (error, result) => {
        if (error) return reject("Couldn't be found.");

        // fazer o parse dos resultados
        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }

  delete(id) {
    const sql = "DELETE FROM selecoes WHERE id=?;";
    return new Promise((resolve, reject) => {
      connection.query(sql, id, (error, result) => {
        if (error) return reject("Couldn't be found.");

        // fazer o parse dos resultados
        const row = JSON.parse(JSON.stringify(result));
        return resolve(row);
      });
    });
  }
}

export default new selecao_repository();
