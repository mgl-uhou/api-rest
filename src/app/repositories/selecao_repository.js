import queries from "../database/connection.js";

class selecao_repository {
  // CRUD
  create(selecao) {
    const sql = "INSERT INTO selecoes SET ?;";
    return queries(sql, selecao, "Couldn't register.");
  }

  findAll() {
    const sql = "SELECT * FROM selecoes;";
    return queries(sql, "Couldn't be found.");
  }

  findById(id) {
    const sql = "SELECT * FROM selecoes WHERE id=?;";
    return queries(sql, id, "Couldn't be found.");
  }

  update(selecao, id) {
    const sql = "UPDATE selecoes SET ? WHERE id=?;";
    return queries(sql, [selecao, id], "Couldn't be updated.");
  }

  delete(id) {
    const sql = "DELETE FROM selecoes WHERE id=?;";
    return queries(sql, id, "Couldn't be deleted.");
  }
}

export default new selecao_repository();
