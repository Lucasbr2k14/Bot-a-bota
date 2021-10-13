const {MessageActionRow, MessageButton} = require("discord.js")

module.exports = (msg) =>{
    const btn = new MessageActionRow().addComponents(
        new MessageButton()
        .setLabel("Bem")
        .setCustomId("Bem")
        .setStyle("SECONDARY"),
    )

    msg.channel.send({content:"A teste", components:[btn]})

    const filter = (interaction) =>{
        if(interaction.user.id === msg.author.id) return true
        return interaction.replay({content: "Hey você não pode usar esse botão!"})
    }

    const collector = msg.channel.createMessageComponentCollector({
        filter,
        max:1,
        time: 1000*15
    })

    collector.on("collect", (Btninteracion)=>{
        console.log(Btninteracion.customId)
    })
}