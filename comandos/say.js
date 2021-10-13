const {prefix} = require("../config.json")
module.exports = (msg) =>{
    msg.channel.send(msg.content.substr(3+prefix.length))
}