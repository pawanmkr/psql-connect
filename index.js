const express = require('express')
const bodyParser = require('body-parser')
const { urlencoded } = require('body-parser')
const { Pool } = require('pg')
const db = require('./queries')

const app = express()
const PORT = 3000

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true
    })
)

app.get('/', db.getUsers)
app.get('/:userId', db.getUserById)
app.post('/', db.createUser)
app.patch('/:userId', db.updateUser)
app.delete('/:userId', db.deleteUser)

app.listen(PORT, () => {
    console.log(`Sever is running at http://localhost:${PORT}`)
})