const transacoes = {
    transacoes: [
        {
            valor: 25,
            descricao: "Pizza",
            categoria: "Despesa"
        },
        {
            valor: 3,
            descricao: "Bolo",
            categoria: "Receita"
        }
    ]
}


class TransacoesRepositorio {

    listarTransacoes() {
        return transacoes
    }

    criarTransacao(transacao) {
        const lista = transacoes.transacoes
        lista.push(transacao)
    }

}

module.exports = TransacoesRepositorio