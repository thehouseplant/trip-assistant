const express = require('express')
const next = require('next')
const axios = require('axios')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const apiKey = process.env.YELP_APIKEY

const searchRequest = {
  term: 'Starbucks',
  location: 'San Francisco, CA'
}

const config = {
  headers: {'Authorization': `Bearer ${apiKey}`},
  params: {
    term: searchRequest.term,
    location: searchRequest.location
  }
}

app.prepare()
  .then(() => {
    const server = express()

    server.get('*', (req, res) => {
      return handle(req, res)
    })
    
    console.log(apiKey)

    axios.get(`https://api.yelp.com/v3/businesses/search`, config)
      .then(response => console.log(response))
    

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`Server running on http://localhost:${port}`)
    })
  })