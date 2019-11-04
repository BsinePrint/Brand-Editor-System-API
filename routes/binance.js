const express = require('express')
const router = express.Router()
const axios = require('axios')

const Controller = require('../modules/Coin/controller')
router.get('/', (req, res) => { 

  res.json({msg: "Retornou"})
})

setInterval(() => {
  const API = `https://api.binance.com/api/v1`
  const url = `${API}/ticker/24hr?symbol=BTCUSDT`
  
  // PRICE
  axios.get(url)
  .then(async (response) => {
    console.log('then: ', response.data)
    Controller.create(response.data)
      .then(async (r) => {
        console.log('create: ', {r})
      })
      .catch(function (error) {
        console.log({error})
      })
  })
  .catch(function (error) {
    console.log({error})
  })

  // Trade
  axios.get(url)
  .then(async (response) => {
    console.log('then: ', response.data)
    Controller.create(response.data)
      .then(async (r) => {
        console.log('create: ', {r})
      })
      .catch(function (error) {
        console.log({error})
      })
  })
  .catch(function (error) {
    console.log({error})
  })
}, 30000)

router.get('/list', async (req, res) => {
  
  const result = await Controller.find().sort({_id: -1}).limit(120)

  res.json(
    result
  )
})

router.get('/last/hour/btc', async (req, res) => {
  
  
  const result = await Controller.find().sort({_id: -1}).limit(120)

  res.json(result)
})



router.get('/:first/:last',  (req, res) => {
  const {
    first,
    last
  } = req.params

  
  const API = `https://api.binance.com/api/v1`
  const url = `${API}/ticker/24hr?symbol=${last.toUpperCase()}${first.toUpperCase()}`
  
  axios.get(url)
  .then(async (response) => {
    console.log('then: ', response.data)
    await Controller.create(response.data)
    res.json(response.data)
  })
  .catch(function (error) {
    console.log({error})
    res.json(false)
  })

})

module.exports = router
