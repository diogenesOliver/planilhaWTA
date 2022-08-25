const transacoes = {
    transacoes: [{
        "valor": 49,
        "descricao": "pizza"
    }]
}


class TransacoesRepositorio {

    listarTransacoes(){
        return transacoes
    }

    criarTransacao(transacao){
        const lista = transacoes.transacoes
        lista.push(transacao)
    }

}

module.exports = TransacoesRepositorio