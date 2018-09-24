const express = require('express')
const next = require('next')

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const clientID = 'w1AnwjlOriaMYXqCtU3izw'
const apiKey = 'eaQbNnUvFPMlBONpRWDphtKNHf_Ai-Clz6FmY8Gnwlgg0hyul9ZLjWQZhdJbhIs2Yb9hKSguerHXfC7BEuWVKkF8GPDnQNfuiB16bkr18pnQZg0B6ULNXEVvwimoW3Yx'

app.prepare()
  .then(() => {
    const server = express()

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(port, (err) => {
      if (err) throw err
      console.log(`Server running on http://localhost:${port}`)
    })
  })