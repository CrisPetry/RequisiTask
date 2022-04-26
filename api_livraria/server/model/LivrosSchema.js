const { Double } = require("mongodb");
const mongoose = require("mongoose");

const LivrosSchema = new mongoose.Schema({
    titulo: { type: String, required: true, unique: true },
    genero: { type: String, required: true },
    autor: { type: String, required: true },
    quantidade: { type: "number", required: true },
    precoUn: { type: Number, required: true}
});

module.exports = mongoose.model("Livros", LivrosSchema);