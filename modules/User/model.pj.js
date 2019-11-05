const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId;
// mongoose.connect('mongodb://localhost/users-test', {useNewUrlParser: true})

// const db = mongoose.connection
// db.on('error', console.error.bind(console, 'connection error:'))
// db.once('open', function() {
//   // we're connected!

//   console.log('Conectado no MongoDB, db: users-test')
// })

const name = 'pj'

const __ACL = require('./schemas/acl')
const __ADDRESS = require('./schemas/address')
const contacts = require('./schemas/contacts')
// SALVAR NO BANCO como BLOB
// const images = require('./schemas/images')

const client_cod = { 
  type: String,
  default: '',
}

const PJ = {
  user_id: {
    type: ObjectId,
    ref: 'User'
  },
  client_cod,
  nick: { 
    type: String,
  },
  cnpj: { 
    type: String,
  },
  state_registration: { 
    type: String,
  },
  role: { // cargo 
    type: String,
  },
  email_contact: { // email contato
    type: String,
  },
  email_store: { // email loja
    type: String,
  },
  
  contacts,
  address: __ADDRESS

}

const schema = new mongoose.Schema(PJ)
const Model = mongoose.model(name, schema)

module.exports = Model