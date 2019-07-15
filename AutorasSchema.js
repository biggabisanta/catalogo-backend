const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const AutorasSchema = new Schema({
    _id: { type: mongoose.Schema.Types.ObjectId, auto: true },
    autora: { type: String, required: true },
    pseudonimo: {type: String},
    assunto: {type: String},
    nascimento: {type: String},
    local: {type: String},
    image: { type: String} 
})

const autorasModel = mongoose.model("autoras", AutorasSchema);

module.exports = autorasModel;