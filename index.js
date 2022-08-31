require('dotenv').config()

let express = require('express')
let app = express()

const TransacoesRepositorio = require('./infra/sql-transacoes-repositorio.js')

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.static((`${__dirname}/public`)))

app.get('/transacoes', async (req, res) => {
    const repositorio = new TransacoesRepositorio()
    const transacoes = await repositorio.listarTransacoes()

    let saldo = 0
    transacoes.transacoes.forEach((transacoes) => {
        
        if(transacoes.categoria === "Despesa"){
            saldo = saldo - transacoes.valor
        }
        
        if(transacoes.categoria === "Receita"){
            saldo = saldo + transacoes.valor
        }

    })

    transacoes.saldo = saldo
    
    res.send(transacoes)
})

app.post('/transacoes', async (req, res) => {
    const repositorio = new TransacoesRepositorio()

    const transacao = req.body

    await repositorio.criarTransacao(transacao)
    res.status(200).send(transacao)
})

app.listen(PORT, () => {
    console.log(`Server run on port: ${PORT}`)
})