const mongoose = require("mongoose")
const { Schema } = mongoose

const subjectSchema = new Schema({
    id: String,
    nombre: String,
    creditos: Number,
    programa: [String]
})

module.exports = mongoose.model("Subject", subjectSchema)
