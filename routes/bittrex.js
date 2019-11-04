const express = require('express')
const router = express.Router()

const axios = require('axios')


router.get('/', (req, res) => { 

  res.json({msg: "Retornou"})
})

router.get('/:first/:last', (req, res) => {
  const {
    first,
    last
  } = req.params

  const API = `https://api.bittrex.com/api/v1.1/public`
  const url = `${API}/getmarkethistory?market=${first.toUpperCase()}-${last.toUpperCase()}`
  axios.get(url)
  .then(function (response) {
    console.log('then: ', response.data)
    res.json(response.data)
  })
  .catch(function (error) {
    console.log({error})
    res.json(false)
  })

})

module.exports = router
