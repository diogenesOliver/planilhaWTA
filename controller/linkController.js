const TransacoesRepositorio = require('./controller/transacoes-repositorio.js')

const listandoDespesasEReceita = (req, res) => {

    const repositorio = new TransacoesRepositorio()
    const transacoes = repositorio.listarTransacoes()

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

}

const criandoTransacao = (req, res) => {

    const repositorio = new TransacoesRepositorio()

    const transacao = req.body

    repositorio.criarTransacao(transacao)
    res.status(200).send(transacao)

}

module.exports = { listandoDespesasEReceita, criandoTransacao }