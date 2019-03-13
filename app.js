const express = require('express'),
 config = require('./config'),
 app = express(),
 router = require('./router'),
 morgan = require('morgan'),
 fileUpload = require('express-fileupload'),
 multer = require('multer'),
 upload = multer()

 app.set('port', process.env.PORT)
 
app.use((req, res, next) => {
  //https://enable-cors.org/
  res.header('Access-Control-Allow-Origin', '*')
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS')
  next()
})
 app.post('/upload',fileUpload(),(req,res) => {
   console.log(req.body)
   console.log(req.files)
   req.files.file.name=req.body.nombre
   console.log(req.files.file.name)
  let EDFile = req.files.file
 //F:/Galilense/Frontend/dist/
  EDFile.mv(`/var/www/html/assets/${EDFile.name}`,err => {
      if(err) return res.status(500).send({ message : err })

      return res.status(200).send({ message : 'File upload' })
  })
})
 //para parsear application/json
 .use(express.json())
 
 .use(morgan('dev'))
 //para parsear application/xwww-form-urlencoded
 .use(express.urlencoded({ extended: false }))
 
 //para parsear multipart/form-data
 .use(upload.array())
 
 
 .use('/api', router)


module.exports = app