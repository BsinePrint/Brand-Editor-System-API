const express = require('express')
const router = express.Router()
const axios = require('axios')

const Controller = require('./controller')
router.get('/', async (req, res) => { 

  res.json(
    await Controller.find()
  )
})


router.post('/', async (req, res) => {
  
  console.log(req.body)
  const result = await Controller.create(req.body)

  res.json(
    result
  )
})


router.post('/pj', async (req, res) => {
  
  console.log(req.body)
  const result = await Controller.create(req.body)

  res.json(
    result
  )
})


router.post('/pf', async (req, res) => {
  
  console.log(req.body)
  const result = await Controller.createPF(req.body)

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

router.get('/pf', async (req, res) => {
  
  const result = await Controller.findPF()

  res.json(
    result
  )
})

router.get('/:id', async (req, res) => {
  
  const result = await Controller.findOne({_id: req.params.id}).sort({_id: -1}).limit(120)

  res.json(
    result
  )
})

module.exports = router
