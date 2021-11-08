const {num, par} = require("./functions/functions.js")


module.exports = (msg) =>{

    const numS = msg.content.substr(9)
    const arrS = numS.split(", ")
    const arrN = num(arrS)


    if(par(arrN.length)){
        
        const conta = (arrN.length/2)-1
        const conta2 = conta+1

        const valor1 = arrN[conta]
        const valor2 = arrN[conta2]
        const res = (valor1+valor2)/2

        msg.channel.send("Valor: " + res)


    }else{

        const corta = (arrN.length+1)/2+0.5

        msg.channel.send("Valor: " + arrN[corta])

    }
 
}