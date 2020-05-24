const express = require('express')
const app = express()
const cors = require("cors")
const port = 3000

app.use(cors())
const route = require("./router")
app.use(express.json())

app.use(route)


app.listen(port, () => console.log(`Example app listening on port port!`))