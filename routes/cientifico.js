
const Cientifico = require('../models/cientifico'),
  c = console.log

const apiResponse = (req, res, err, data) => {
  if (err) {
    res.status(500).send({
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


const getCientificos = async (req, res) => {
  await Cientifico
    .find({})
    .populate('country', 'name')
    .sort({ '_id': -1 })
    .exec((err, data) => apiResponse(req, res, err, data))
}

const postCientifico = async (req, res) => {
    c(req.body)
  let cientifico = new Cientifico(req.body)
    await cientifico.save((err, data) => apiResponse(req, res, err, data)) 
  
}

const getCientifico = async (req, res) => {
  await Cientifico
    .findById(req.params.id)
    .exec((err, data) => apiResponse(req, res, err, data))
}

const putCientifico = async (req, res) => {
  c(req.body)
  await Cientifico.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
    (err, data) => apiResponse(req, res, err, data)
  )
}

const deleteCientifico= async (req, res) => {
  await Cientifico.findByIdAndRemove(
    req.params.id,
    (err, data) => apiResponse(req, res, err, data)
  )
}

const deleteCientificos= async (req, res) => {
  if(req.params.passKey!=987654){
    res.status(500).send({
      message: `api Key incorrecta}`
    })
  }
  await Cientifico.deleteMany(
    {hechoPorJair:false},
    (err, data) => apiResponse(req, res, err, data)
  )
}
module.exports = {
    getCientificos,
  postCientifico,
  getCientifico,
  putCientifico,
  deleteCientifico,
  deleteCientificos
}


let cambiando = function(name,nuevo){
    return `${nuevo}.${name.split(".")[1]}`
    }