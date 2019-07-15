const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LivrosSchema = new Schema ({

    isbn_asin:{type: String, required: true},
    livros_obra: { type: String, required: true },
    subtitulo: {type: String},
    serie_colecao: {type: String},
    idioma:{type: String, required: true},
    genero:{type: String, required: true},
    ano_livro: {type: String}

})


const livrosModel = mongoose.model( "livros", LivrosSchema);

module.exports = { livrosModel, LivrosSchema}