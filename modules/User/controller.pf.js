const Model = require('./model')
const ModelPF = require('./model.pf')

const find = async (req, res) => {
  return await ModelPF.find()
}

const findOne = async (_id) => {
  const pf =  await ModelPF.findOne({_id})
  const user = await Model.findOne({_id: pf.user_id})

  user.pf = pf
  return {user, pf}
}

const create = async (data) => {
  
  return await ModelPF.create(data)
}

module.exports = {
  find,
  findOne,
  create,
}