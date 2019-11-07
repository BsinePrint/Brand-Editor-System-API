const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Model = require('./model')

const checkIfEmailExists = async (email) => !!(await User.find({ email }).length)
const getPasswordHash = (pass) => bcrypt.hash(pass, 10)

const comparePassword = (pass, userPass) => {
	const password = bcrypt.compare(pass, userPass);
	return password
}

const find = async (req, res) => await Model.find()
const create = async (data) => {
  
  if (checkIfEmailExists(data.email)) return false

  const hashedPass = getPasswordHash(data.password)

  console.log({data})
  data.password = hashedPass
  console.log({data})
  // return await Model.create(data)
}

module.exports = {
  find,
  create
}