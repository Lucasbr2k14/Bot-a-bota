const {bot} = require("./client.js")

bot.on("ready", ()=>{
    console.log( "\033[34m" + "O bot foi iniciado com sucesso!" + "\033[0;0m")
    console.log("Está em: " + "\033[1;34m" +bot.guilds.cache.size + " servidores." + "\033[0m")
    bot.user.setActivity("!ajuda: Para ajuda!")
})