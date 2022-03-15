const {prefix} = require("../config.json")
module.exports = {
    run(message){
        const tudo = message.content.substr(2+prefix.length)
        const msg = tudo.split(" ")
        const valores = msg[0].split("d")
        valores.push(msg[1])
        
        const vezes = parseInt(valores[0])
        const dado = parseInt(valores[1])
        const conta = valores[2]

        
        if(vezes > 0 && vezes <= 200 && dado > 1){
            
            let valoresString
            let valoresNumero

            for(let i = 0 ; i < vezes ; i++){
                const random = Math.floor(Math.random() * dado + 1)
                

                if(valoresString){
                    valoresString = valoresString + " + " + String(random)
                }else{
                    valoresString = String(random)           
                }
                if(valoresNumero){
                    valoresNumero = valoresNumero + random
                }else{
                    valoresNumero = random
                }
                
            }
            const somaS = valoresNumero + conta
            const valorS = eval(somaS)

            if(conta){
                message.channel.send("``` " + valoresString + " = " + valoresNumero + conta + " = " + valorS + "```")
            }else{
                message.channel.send("``` " + valoresString + " = " + valoresNumero + "```")
            }

        }else{
            message.channel.send("Valores invalidos.")
        }
    },
    description:"Rolar um dado do valor escolido e quantas vezes quiser",
    exemple:"r 1d20 + 90"
}