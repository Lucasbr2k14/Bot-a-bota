const {bot} = require("./client.js")
const {MessageActionRow,MessageButton} = require("discord.js")
const {prefix} = require("../config.json")


bot.on("messageCreate", (msg)=>{   

    //Filtros
    if(!msg.guild) return  
    if(msg.member.user.bot) return
    if(!msg.content.startsWith(prefix)) return

    //separando o comando do parâmetro
    const parameter = msg.content.split(" ")
    
    //definindo a variavel comando 
    let comand

    //Vendo se tem algum parâmetro
    //para puxar os arquivos certos sem o parametro na variavel comandos
    if(parameter.length >= 2){
        comand = parameter[0].slice(prefix.length)
    }else{
        comand = msg.content.slice(prefix.length)
    }

    try{   
        const comandFunc = require(`../comandos/${comand}.js`).run
        comandFunc(msg, parameter)
    }catch(e){ 
        console.log("Erro: " + e)
    }

})
