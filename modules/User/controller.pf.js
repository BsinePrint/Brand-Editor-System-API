const Model = require('./model')
const ModelPF = require('./model.pf')
// const ModelPJ = require('./model.pj')

const bcrypt = require('bcrypt')

const find = async (req, res) => {
  return await ModelPF.find()
  // .populate('user_id')
}
const findOne = async (_id) => {
  const pf =  await ModelPF.findOne({_id})
  const user = await Model.findOne({_id: pf.user_id})

  user.pf = pf
  return {user, pf}
  // .populate('user_id')
}
// const findPJ = async (req, res) => await ModelPJ.find()

const create = async (data) => {
  
  return await ModelPF.create(data)
}

module.exports = {
  find,
  findOne,
  create,
}