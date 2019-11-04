const express = require('express')
const router = express.Router()
const axios = require('axios')

const Controller = require('../modules/Coin/controller')
router.get('/', (req, res) => { 

  res.json({msg: "Retornou"})
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
