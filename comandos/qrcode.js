const { prefix } = require("../config.json")
module.exports = {
    run(msg){

        const tamanhoDoCorte = 6 + prefix.length + 1
        const data = msg.content.substr(tamanhoDoCorte)

        msg.channel.send(`https://api.qrserver.com/v1/create-qr-code/?data=${data}&amp;size=50x50`)

    }
}