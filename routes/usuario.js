const Usuario = require('../models/usuario'),
  fs = require('fs')

  const apiResponse = (req, res, err, data) => {
    if (err) {
      res.status(501).send({
        message: `Error interno del servidor. ${err.message}`
      })
    } else {
      if (data) {
        res.status(200).send({ data })
      } else {
        res.status(404).send({
          message: `No existen datos en el API con tus parámetros de búsqueda.`
        })
      }
    }
  }
const postUsuario= async (req, res) => {
    let usuario = new Usuario(req.body)
    await usuario.save((err, data) => apiResponse(req, res, err, data))
}

const updateUsuario= async (req, res) => {   
  
    await Usuario.findByIdAndUpdate(
        req.params.codigo,
        req.body,
        { new: true },
        (err, data) => apiResponse(req, res, err, data)
      )
  }

const getUsuario = async (req, res) => {
    await Usuario
    .findById(req.params.codigo)    
    .exec((err, data) => apiResponse(req, res, err, data))
}


module.exports = {
    postUsuario,
  getUsuario,
  updateUsuario
}