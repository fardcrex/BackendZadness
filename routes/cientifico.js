fs = require('fs')
const Cientifico = require('../models/cientifico'),
  c = console.log

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
    .populate('country', 'name')
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

const reiniciarCientificos= async (req, res) => {
  if(req.params.passKey!=process.env.CLAVE_REINICIO){
  await  res.status(401).send({
      message: `api Key incorrecta`
    })
  }else{
    await Cientifico.deleteMany(
      {},
      (err, data) => apiResponse2(req, res, err, data)
    )
  }
 
  
}

const apiResponse2 = (req, res, err, data) => {
  
  const cientificos = JSON.parse(fs.readFileSync('./routes/cientificosBase.json', 'utf-8'))
     Cientifico.insertMany(cientificos, (err2, data2) => {
      if (err2) {
        res.status(500).send({
          message: `Error interno del servidor. ${err.message}`
        })
      } else {
        res.status(200).send({ data2 })
      }
    })

}


module.exports = {
    getCientificos,
  postCientifico,
  getCientifico,
  putCientifico,
  deleteCientifico,
  reiniciarCientificos,
}


let cambiando = function(name,nuevo){
    return `${nuevo}.${name.split(".")[1]}`
    }