const express = require('express'),
  Country = require('./routes/country'),
  Cientifico = require('./routes/cientifico'),
  api = express.Router()
 
api.get('/', async (req, res) => {
  await res.status(200).send({
    message: 'Funcionando API RESTful de Cientificos con Node.js y MongoDB.'
  })
})

api.post('/countries', Country.postCountries)
api.get('/countries', Country.getCountries)
api.get('/cientificos', Cientifico.getCientificos)
api.post('/cientifico', Cientifico.postCientifico)
api.get('/cientifico/:id', Cientifico.getCientifico)
api.put('/cientifico/:id', Cientifico.putCientifico)
api.delete('/cientifico/:id', Cientifico.deleteCientifico)
api.get('/cientificos/:passKey', Cientifico.reiniciarCientificos)

module.exports = api