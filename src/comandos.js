const {bot} = require("./client.js")
const {MessageActionRow,MessageButton} = require("discord.js")
const {prefix} = require("../config.json")


bot.on("messageCreate", (msg)=>{   

    if(msg.content == "!msg"){
        const button = new MessageActionRow().addComponents(
            new MessageButton()
            .setLabel("Bem")
            .setCustomId("Bem")
            .setStyle("SUCCESS"),
            new MessageButton()
            .setLabel("Ruim")
            .setCustomId("Ruim")
            .setStyle("DANGER")
        )
    
        msg.channel.send({content: "Olá usuario como você está?", components:[button]})

        const filter = (interaction)=>{
            if(interaction.user.id === msg.author.id) return true
            return interaction.replay({content: "Você não pode usar esse comando"})
        }

        const collector = msg.channel.createMessageComponentCollector({
            filter,
            max:1,
            time: 1000*10
        })
        
        collector.on("collect", (Btninteraction) =>{
            if(Btninteraction.customId == "Ruim"){
                console.log("Ruim")
                Btninteraction.user.send("Porque você está assim?")
            }else{
                console.log("Bem")
            }
        })


        collector.on("end", (Btninteraction)=>{
            Btninteraction.forEach((Click)=>{
                console.log("Server: " + Click.guildId + " channel: " + Click.channelId)
            })
        })
    }



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
        comand = parameter[0].substr(prefix.length)
    }else{
        comand = msg.content.substr(prefix.length)
    }

    try{   
        const comandFunc = require(`../comandos/${comand}.js`)
        comandFunc(msg)
    }catch(e){ 
        console.log("Erro: " + e)
    }

})
