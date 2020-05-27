const express = require('express')
const app = express()
const cors = require("cors")
const mongoose = require('mongoose')

app.use(cors())
const route = require("./router")

const port = 3000 || process.env.PORT

mongoose.connect('mongodb+srv://ryan:ryan123@cluster0-mxewm.mongodb.net/incoddeChallenge1?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology: true
})


app.use(express.json())

app.use(route)

app.listen(port , () => console.log(`Example app listening on port ${port}!`))