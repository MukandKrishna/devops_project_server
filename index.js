const express = require('express')
const app = express()
const cors = require('cors')
const Connection = require('./Database/db')
const Insert = require('./Model/Inserter')
const routes = require('./Routes/router')
PORT = 5000


Connection()

app.use(cors())
app.use(express.json())
app.use('/api',routes)
Insert()
app.listen(PORT, function(){
    console.log(`Server up at https://localhost:${PORT}`)
})

