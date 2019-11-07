const Model = require('./model')
const ModelPF = require('./model.pf')
const ModelPJ = require('./model.pj')

const bcrypt = require('bcrypt')

const find = async (req, res) => await Model.find()
const findPF = async (req, res) => {
  return await ModelPF.find()
}
const findPJ = async (req, res) => await ModelPJ.find()

const create = async (data) => {
  
  return await Model.create(data)
}
const createPF = async (data) => {
  
  // const User = await Model.create(data)

  return await ModelPF.create(data)
}
const createPJ = async (data) => {
  
  const User = await Model.create(data)

  return await ModelPJ.create(data)
}

module.exports = {
  find,
  findPF,
  findPJ,
  create,
  createPF,
  createPJ
}