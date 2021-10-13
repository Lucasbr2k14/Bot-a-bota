const {bot} = require("../src/client.js")
const {emojis} = require("../config.json")
module.exports = (msg) =>{
    msg.channel.send(emojis.loading).then((message)=>{
        message.edit(`Ping API: ${message.createdTimestamp - msg.createdTimestamp}, Latência: ${bot.ws.ping}`)
    })
}

