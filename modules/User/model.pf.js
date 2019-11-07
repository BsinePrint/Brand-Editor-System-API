const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;
require('./model')
// mongoose.connect('mongodb://localhost/users-test', {useNewUrlParser: true})

// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function() {
//   // we're connected!

//   console.log('Conectado no MongoDB, db: users-test')
// })

const name = 'pf'

const __ACL = require('./schemas/acl')
const __ADDRESS = require('./schemas/address')
const contacts = require('./schemas/contacts')
// SALVAR NO BANCO como BLOB
// const images = require('./schemas/images')

const client_cod = { 
  type: String,
  default: '',
}

const PF = {
  user_id: {
    type: ObjectId,
    ref: 'User'
  },
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

const schema = new mongoose.Schema(PF)
const Model = mongoose.model(name, schema)

module.exports = Model