const Model = require('./model')

const find = async (req, res) => await Model.find()

const create = async (req, res) => {
  
  return await Model.create()
}

module.exports = {
  find
}