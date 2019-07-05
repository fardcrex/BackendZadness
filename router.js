const express = require('express'),
  Country = require('./routes/country'),
  Cientifico = require('./routes/cientifico'),
  Usuario = require('./routes/usuario')
  api = express.Router()
 
api.get('/', async (req, res) => {
  await res.status(200).send({
    message: 'Funcionando API RESTful de Cientificos con Node.js y MongoDB.'
  })
})

api.post('/countries', Country.postCountries)
api.get('/countries', Country.getCountries)
api.get('/cientificos', Cientifico.getCientificos)
api.post('/cientifico', Usuario.postUsuario)
api.get('/cientifico/:id', Cientifico.getCientifico)
api.put('/cientifico/:id', Cientifico.putCientifico)
api.delete('/cientifico/:id', Cientifico.deleteCientifico)
api.get('/cientificos/:passKey', Cientifico.reiniciarCientificos)

api.get('/arduino/:codigo',Usuario.getUsuario)
api.post('/arduinoCreate',Usuario.postUsuario)
api.post('/arduino/:codigo',Usuario.updateUsuario)

module.exports = api