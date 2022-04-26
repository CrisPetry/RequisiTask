const express = require('express');
const routes = express.Router();
const controle = require('../controller/LivrosCon');

routes.route('/livros').get(controle.listar);
routes.route('/livros').post(controle.incluir);
routes.route('/livros').put(controle.alterar);
routes.route('/livros/:id').delete(controle.excluir);


module.exports = routes;