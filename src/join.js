const {bot} = require("./client.js")


bot.on("guildMemberAdd", (member)=>{
    console.log(member.guild.id)
})