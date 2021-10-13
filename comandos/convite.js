const {MessageButton, MessageActionRow} = require("discord.js")

module.exports = (msg)=>{
    const buton = new MessageActionRow().addComponents(
        new MessageButton()
        .setLabel("Me convide")
        .setStyle("LINK")
        .setURL("https://discord.com/api/oauth2/authorize?client_id=550777156620255243&permissions=8&scope=bot")
    )
    msg.channel.send({content: "Você quer me convidar para o seu servidor", components:[buton]})
}
