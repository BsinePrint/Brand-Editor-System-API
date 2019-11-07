const Model = require('./model')
const ModelPJ = require('./model.pj')


const find = async (req, res) => {
  return await ModelPJ.find()
}

const findOne = async (_id) => {
  const pj =  await ModelPJ.findOne({_id})
  const user = await Model.findOne({_id: pj.user_id})

  user.pj = pj
  return {user, pj}
}

const create = async (data) => {
  
  return await ModelPJ.create(data)
}

module.exports = {
  find,
  findOne,
  create,
}