require('dotenv').config()

let express = require('express')
let app = express()

const PORT = 8080

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/nav.html')
})

app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`)
})