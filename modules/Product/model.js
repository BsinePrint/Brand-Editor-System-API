const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/users-test', {useNewUrlParser: true})

// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function() {
//   // we're connected!

//   console.log('Conectado no MongoDB, db: users-test')
// })

const name = 'user'

const __ACL = require('./schemas/acl')
const __ADDRESS = require('./schemas/address')
const contacts = require('./schemas/contacts')
// SALVAR NO BANCO como BLOB
const images = require('./schemas/images')

const client_cod = { 
  type: String,
  default: '',
}

const PF = {
  client_cod,
  nick: { 
    type: String,
    default: '',
  },
  cpf: { 
    type: String,
    default: '',
  },
  gender: { 
    type: String,
    default: 'm',
  },
  birth: { 
    type: String,
    default: '',
  },
  cpf: { 
    type: String,
    default: '',
  },
  
  address: __ADDRESS,
  contacts
}

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