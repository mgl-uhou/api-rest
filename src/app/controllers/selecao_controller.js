import selecao_repository from "../repositories/selecao_repository.js";

class selecao_controller {
  async index(_request, response) {
    const row = await selecao_repository.findAll();
    response.json(row);
  }

  async show(request, response) {
    const id = request.params.id;
    const row = await selecao_repository.findById(id); 
    response.json(row);
  }

  async store(request, response) {
    const selecao = request.body;
    const row = await selecao_repository.create(selecao);
    response.json(row);
    
  }

  async update(request, response) {
    const selecao = request.body;
    const id = request.params.id;
    const row = await selecao_repository.update(selecao, id);
    response.json(row);
  }

  async delete(request, response) {
    const id = request.params.id;
    const row = await selecao_repository.delete(id);
    response.json(row);
  }
}

// Padrão Singleton
export default new selecao_controller();
