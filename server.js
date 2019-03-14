const c = console.log,
  app = require('./app')
  db = require('./models/db')

app.listen(
  app.get('port'),
  () => c(`Iniciando API RESTful en el puerto ${app.get('port')}`)
)

c(
  '***** VARIABLES DE ENTORNO *****\n',
  process.env.NODE_ENV,
  '\n',
  process.env.URL_DB,
  '\n',
  process.env.PORT,
  '\n***** VARIABLES DE ENTORNO *****'
)