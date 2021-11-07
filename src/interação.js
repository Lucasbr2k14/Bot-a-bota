const {bot} = require("./client.js")
bot.on("interactionCreate", (interaction)=>{    
    if(interaction.isButton()){
        interaction.reply("Você está " + interaction.customId)
        
    }
})