const Country = require('../models/country'),
  fs = require('fs')


const postCountries = async (req, res) => {
  const countries = JSON.parse(fs.readFileSync('./models/countries.json', 'utf-8'))

  await Country.insertMany(countries, (err, data) => {
    if (err) {
      res.status(500).send({
        message: `Error interno del servidor. ${err.message}`
      })
    } else {
      res.status(200).send({ data })
    }
  })
}

const getCountries = async (req, res) => {
  await Country.find({}).exec((err, data) => {
    if (err) {
      res.status(500).send({
        message: `Error interno del servidor. ${err.message}`
      })
    } else {
      if (data) {
        res.status(200).send({ data })
      } else {
        res.status(404).send({
          message: `No existen países en el API`
        })
      }
    }
  })
}


module.exports = {
  postCountries,
  getCountries
}