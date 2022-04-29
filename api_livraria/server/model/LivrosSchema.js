const mongoose = require("mongoose");

const LivrosSchema = new mongoose.Schema({
    titulo: { type: String, required: true, unique: true },
    genero: { type: String, required: true },
    autor: { type: String, required: true },
    quantidade: { type: String, required: true },
    precoUn: { type: String, required: true }
});

module.exports = mongoose.model("Livros", LivrosSchema);