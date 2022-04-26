const Livros = require('../model/LivrosSchema');

module.exports = {
    listar: async (req, res) => {
        Livros.find((err, objetos) => {
            (err ? res.status(400).send(err) : res.status(200).json(objetos));
        }).sort({ titulo: 1 });
    },

    incluir: async (req, res) => {
        let obj = new Livros(req.body);
        obj.save((err, obj) => {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    alterar: async (req, res) => {
        let obj = new Livros(req.body);
        Livros.updateOne({ _id: obj._id }, obj, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json(obj));
        });
    },

    excluir: async (req, res) => {
        Livros.deleteOne({ _id: req.params.id }, function (err) {
            (err ? res.status(400).send(err) : res.status(200).json("message:ok"));
        });
    },

    

};
