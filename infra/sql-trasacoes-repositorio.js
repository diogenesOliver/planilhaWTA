const { Pool } = require('pg')
const pool = new Pool()



class SqlTransacoesRepositorio {

    async listarTransacoes() {
        pool.query

        return transacoes
    }

    async criarTransacao(transacao) {
        const lista = transacoes.transacoes
        lista.push(transacao)
    }

}

module.exports = SqlTransacoesRepositorio