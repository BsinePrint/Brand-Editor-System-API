const express = require('express')
const router = express.Router()
const axios = require('axios')

const Controller = require('./controller')
router.get('/', async (req, res) => { 

  res.json(
    await Controller.find()
  )
})

router.get('/', async (req, res) => {
  
  const result = await Controller.find().sort({_id: -1}).limit(120)

  res.json(
    result
  )
})

router.get('/', async (req, res) => {
  
  const result = await Controller.find().sort({_id: -1}).limit(120)

  res.json(
    result
  )
})

module.exports = router
