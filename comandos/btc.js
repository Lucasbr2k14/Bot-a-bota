const axios = require("axios").default

module.exports = (msg) =>{
    //Fazendo o Request para esse url
    axios.get("https://www.mercadobitcoin.net/api/BTC/ticker/").then((data)=>{
        //Puxando dados para int
        const valorI = parseFloat(data.data.ticker.last)
        //Mudando dados para string e tirando os outros numeros depois da virgula
        const valorS = String(valorI.toFixed(2))
        //Mudando do ponta para virgula
        const valor = valorS.replace(".", ",")

        //Enviando msg para a pessoa que pediu
        msg.channel.send("```\n" + "R$ " + valor + "\n```")
    
    }).catch((e)=>{
        msg.channel.send("Erro não foi posivel conectar na api")
        console.log("\033[31m" + "Comando btc: " + "\033[0;0m" + e)
    })
}