fs = require('fs')

cientificos = JSON.parse(fs.readFileSync('./routes/cientificosBase.json', 'utf-8'))

console.log(cientificos)