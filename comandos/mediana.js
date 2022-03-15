const {num, par} = require("./functions/functions.js")


module.exports = {
    run(msg){

        const numS = msg.content.substr(9)
        const arrS = numS.split(", ")
        const arrN = num(arrS).sort()
        

        if(par(arrN.length)){
            
            const conta = (arrN.length/2)-1
            const conta2 = conta+1

            const valor1 = arrN[conta]
            const valor2 = arrN[conta2]
            const res = (valor1+valor2)/2

            console.log(arrN)        
            msg.channel.send(`Valores: ${arrN} = ${res}`)

        }else{

            const corta = (arrN.length+1)/2+0.5

            msg.channel.send("Valor: " + arrN[corta])

        }
    },
    description:"O bot ira fazer a médiana dos valores escolhidos",
    exemple:"mediana 1, 2, 3, 4"
}