const {prefix} = require("../config.json")
module.exports = {
    run(msg){
        msg.channel.send(msg.content.substr(3+prefix.length))
    },
    description: "O bot ira falar o que você escreveu",
    exemple:"say texto",
}