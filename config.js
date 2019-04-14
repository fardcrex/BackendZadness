require('dotenv').config()
process.env.NODE_ENV = process.env.NODE_ENV || 'dev'
process.env.PORT = process.env.PORT || 3000

if (process.env.NODE_ENV === 'dev') {
  process.env.URL_DB = 'mongodb://zadness.com:27017/ibernel'
} else {
  process.env.URL_DB = 'mongodb://localhost:27017/ibernel'
}
console.log(process.env.PORT)

//llego mi comentario
//llego mi release