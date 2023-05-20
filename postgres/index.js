const express = require('express')
const bodyParser = require('body-parser')
var cors = require('cors')


const app = express()
const port = 3000
const db = require('./queries')
app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/', (request, response) => {
    response.json({ info: 'Node.js, Express, and Postgres API' })
  })
  
app.get('/getConfig', db.getConfig)
app.get('/getDalyLog', db.getDalyLog)

app.listen(port, () => {
    console.log(`Postgres database running on ${port}.`)
})