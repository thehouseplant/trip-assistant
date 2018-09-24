const express = require('express')
const next = require('next')
const yelp = require('yelp-fusion')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const clientID = process.env.YELP_CLIENTID
const apiKey = process.env.YELP_APIKEY

const searchRequest = {
  term: 'Starbucks',
  location: 'San Francisco, CA'
}

const client = yelp.client(apiKey)

app.prepare()
  .then(() => {
    const server = express()

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    client.search(searchRequest).then(res => {
      const firstResult = response.jsonBody.businesses[0]
      const prettyJson = JSON.stringify(firstResult, null, 4);
      console.log(prettyJson)
    }).catch(error => {
      console.error(error)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`Server running on http://localhost:${port}`)
    })
  })