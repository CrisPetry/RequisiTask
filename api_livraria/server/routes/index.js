const { Router } = require('express');
const routes = Router();

//Liberar origem para requisições
var cors = require('cors');
routes.use(cors({ origin: 'http://localhost:3000' }));

const livrosRout = require('./LivrosRout');
routes.use("/api", livrosRout);

module.exports = routes;
