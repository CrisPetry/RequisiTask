const express = require('express');
const routes = express.Router();
const Livro = require('../controller/LivrosCon');

routes.route('/livros').get(Livro.listar);
routes.route('/livros').post(Livro.incluir);
routes.route('/livros').put(Livro.alterar);
routes.route('/livros/:id').delete(Livro.excluir);
routes.route('/livros/:id').get(Livro.obterPeloId);
routes.route('/livros/filtro/:filtro').get(Livro.filtrar);


module.exports = routes;