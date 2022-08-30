require('dotenv').config()

const { Pool } = require('pg')
const pool = new Pool()

class SqlTransacoesRepositorio {

    async listarTransacoes() {

        const resultado = await pool.query('SELECT * FROM transacoes')
        console.log(resultado.rows)

        return {
            transacoes: resultado.rows
        }

    }

    async criarTransacao(transacao) {
        const lista = transacoes.transacoes
        lista.push(transacao)
    }

}

module.exports = SqlTransacoesRepositorio