const Discord = require("discord.js")
const fs = require("fs")
const {prefix} = require("../config.json")

module.exports = {
    async run(msg, parameter){


        msg.channel.send(formatObjectString(readCommandsFile()))
    },
    description: "Mostrar esta ajuda",
    exemple:"help"
    
}



function formatObjectString(obj){

    let result;

    // console.log(obj)


    for(const valueObj in obj){
        
        const commandName = obj[valueObj].commandName
        const description = obj[valueObj].description
        const exemple = obj[valueObj].exemple

        if(result){
            result += `${prefix}${commandName} ---- ${description}. Exemplo [${prefix}${exemple}]\n`
        }else{
            result = `${prefix}${commandName} ---- ${description}. Exemplo: [${prefix}${exemple}]\n`
        }
    }

    return "```" + result + "```"
}

function readCommandsFile(){
    const objectHelpContent = {}

    fs.readdirSync("./comandos").filter(file => file.endsWith(".js")).forEach(file =>{
        const commandName = file.slice(0, -3)
        const command = require(`./${file}`)
        
        objectHelpContent[commandName] = {
            commandName: commandName,
            description: command.description,
            exemple: command.exemple
        } 
    })
    return objectHelpContent
}