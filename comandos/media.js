const {num, soma} = require("./functions/functions.js")

module.exports = {
    run(msg){
        const valoresS = msg.content.substr(7)
        const valoresA = valoresS.split(", ")
        const valoresN = num(valoresA)
        const conta = soma(valoresN)/valoresN.length

        msg.channel.send("valor de sua média: " + conta)
    },
    description:"O bot vai fazer a média dos valores ecolhidos",
    exemple:"media 1, 2, 3,"
}