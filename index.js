require('dotenv').config()

let express = require('express')
let app = express()

const PORT = 8080

app.get('/', (req, res) => {
    res.send(`Server run on port: ${PORT}`)
})

app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`)
})