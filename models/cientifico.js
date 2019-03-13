const mongoose = require('mongoose'),
  Schema = mongoose.Schema,
  CientificoSchema = new Schema({
    name: {
      type: String,
      required: [true, 'El nombre del Cientifico es requerido'],
      unique: true
    },
    country: {
      type: Schema.Types.ObjectId,
      ref: 'Country',
      required: [true, 'El país de nacimiento es requerido']
    },
    descripcion:{
        type: String,
    },
    url:{
        type: String
       
    },
    imagen: String,  
    AñoNacimiento: Number,
    AñoFallecimiento: Number,
    usuario: String
  })

//mongodb va a pluralizar y poner en minúsculas el modelo
module.exports = mongoose.model('Cientifico', CientificoSchema)