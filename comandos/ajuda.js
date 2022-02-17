const Discord = require("discord.js")
const {prefix} = require("../config.json")



const comandos = {
    ajuda : {
        comando: `${prefix}ajuda`,
        status: "Serve para mostrar as ajudas"
    },
    botnome : {
        comando: `${prefix}bot-nome`,
        status: "Ira mudar o nome do bot no servidor."
    },
    box : {
        comando: `${prefix}box`,
        status: "Comando cria uma caixa em volta do seu texto"
    },
    btc : {
        comando: `${prefix}btc`,
        status: "Mostra o valor do bitCoin em reais."
    },
    eth : {
        comando: `${prefix}eth`,
        status: "Mostra o valor do ethereum em reais."
    },
    say : {
        comando: `${prefix}say`,
        status: "Printa na tela o que você escreveu."
    },
    r : {
        comando: `${prefix}r`,
        status: `Roda um dado com tamanho que você escoler EX: [${prefix}r 1d20 + 10]`
    },
    ping : {
        comando: `${prefix}ping`,
        status: "Mostra o ping do bot com o servidor e o ping da api."
    },
    mediana : {
        comando: `${prefix}mediana`,
        status: `O bot faz a mediana dos valores escolidos por você EX: [${prefix}mediana 1,2,3,4,5,6]`
    },
    media : {
        comando: `${prefix}media`,
        status: `O bot ira fazer uma média dos valores escolidos por você EX: [${prefix}]`
    }
}

function string(){
    //Criando a variavel 
    let comandosString = ''

    //Criando uma string com todos os objetos com o nome e status
    for (const key in comandos) {
        comandosString += comandos[key].comando + " ------ " + comandos[key].status + "\n"
    }

    //Retornado o valor da funcção
    return comandosString
}

module.exports = (msg) => {
    //Puxando a função para o o send    
    msg.channel.send("```" + string() + "```")
}

