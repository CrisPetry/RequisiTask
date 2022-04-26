const mongoose = require("mongoose");

const uri = "mongodb://admin:admin@localhost:27017/livros?authSource=livros";

mongoose.connect(uri, {});