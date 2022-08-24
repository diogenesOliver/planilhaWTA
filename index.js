require('dotenv').config()

let express = require('express')
let app = express()

const TransacoesRepositorio = require('./controller/transacoes-repositorio.js')

const PORT = process.env.PORT

app.use(express.static((`${__dirname}/public/nav.html`)))

app.get('/transacoes', (req, res) => {
    const repositorio = new TransacoesRepositorio()
    const transacoes = repositorio.listarTransacoes()
    res.send(transacoes)
})

app.get('/criar-transacao', (req, res) => {
    const repositorio = new TransacoesRepositorio()
    const transacao = {
        valor: 30,
        descricao: 'Bolo'
    }
    repositorio.criarTransacao(transacao)
    res.status(200).send(transacao)
})

app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`)
})