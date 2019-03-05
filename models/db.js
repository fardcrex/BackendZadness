const c = console.log,
  mongoose = require('mongoose'),
  config = require('../config')

class Database {
  constructor() {
    this.connect()
  }

  connect() {
    mongoose.connect(process.env.URL_DB, { useNewUrlParser: true })
      .then(() => c(`Conexión exitosa al servidor de MongoDB: ${process.env.URL_DB}`))
      .catch(err => c(`Error de conexión al servidor de BD: ${err.message}`))
  }
}

module.exports = new Database()