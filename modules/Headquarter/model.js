const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/users-test', {useNewUrlParser: true})

// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function() {
//   // we're connected!

//   console.log('Conectado no MongoDB, db: users-test')
// })

const name = 'headquarter'


const PJ = {
  client_cod,
}

const __SCHEMA = {
  acl: __ACL,
  avatar: { 
    type: String,
    default: '',
    required: false
  },
  active: {
    type: Boolean,
    default: true
  },
  name: { // completo, pq separar em Nome e Sobrenome?
    type: String,
    default: '',
    required: true
  },
  email: {
    type: String,
    default: '',
    required: true
  },
  password: {
    type: String,
    default: '',
    required: true
  },
  birth: {
    type: String,
    default: ''
  },
  cpf: {
    type: String,
    default: ''
  },

  PF,
  PJ
}

const schema = new mongoose.Schema(__SCHEMA)
const userModel = mongoose.model(name, schema)

module.exports = userModel