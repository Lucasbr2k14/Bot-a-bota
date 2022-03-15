const {bot} = require("../src/client.js")
const {emojis} = require("../config.json")
module.exports = {
    run(msg){
        msg.channel.send(emojis.loading).then((message)=>{
            message.edit(`Ping API: ${message.createdTimestamp - msg.createdTimestamp}, Latência: ${bot.ws.ping}`)
        })

    },
    description:"Testar a latência da api e da conexão",
    exemple: "ping",
    
}

