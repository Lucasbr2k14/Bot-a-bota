const {bot} = require("./client.js")
module.exports = bot.on("interactionCreate", (interaction)=>{
    
    if(interaction.isButton()){
        interaction.reply("Você está " + interaction.customId)
        
    }


})