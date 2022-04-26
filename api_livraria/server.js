

// usar o express
const express = require('express');
const app = express();
app.use(express.json()); // para tratar json

const port = process.env.PORT || 3000;
app.listen(port, () => {
    return console.log('API executando na porta ' + port);
});


//usar o mongo
require("./server/banco/mongo");

//usar as rotas
const routes = require("./server/routes/index");
app.use(routes);

