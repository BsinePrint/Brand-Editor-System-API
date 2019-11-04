const Model = require('./model')

const find = async (req, res) => await Model.find()

const create = async (data) => {
  
  return await Model.create(data)
}

module.exports = {
  find,
  create
}