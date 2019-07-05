const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  UsuarioSchema = new Schema({
    name: {
      type: String,
      required: [true, 'El nombre del Aparato es requerido'],
      unique: true
    },
    humedad: {
      type: Number,      
    },
    temperatura:{
        type: Number,
    },
    
  })

//mongodb va a pluralizar y poner en minúsculas el modelo
module.exports = mongoose.model('Usuario', UsuarioSchema)