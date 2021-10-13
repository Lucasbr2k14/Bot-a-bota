const {bot} = require("../src/client.js")
const functions = {
    atividade: activity,
    status: status,
    ajuda: ajuda
}



module.exports = (msg) =>{

    //verificando se é o dono do bot
    if(msg.member.id == "290982797269663745"){
        
        //Filtrando só o parametro
        const comand = msg.content.split(" ")[1]
        
        //Puxando a função
        const func = functions[comand]
        console.log(func)

        //Verificando se ele existe
        if(func){
            func(msg)
        }else{
            msg.channel.send("Comando invalido")
            return 
        }

    }else{
        return
    }
}
//Criando funções para o adm

//Mudar o status com o que o dono escrever
function activity(msg){
    const content = msg.content.substr(15)
    console.log(content)
    bot.user.setActivity(content)
}

function ajuda(msg){
    const {prefix} = require("../config.json")
    msg.channel.send(`Ajuda!!\n Para usar você tem que ser o dono do bot \n - ${prefix}adm atividade [nome da atividade] \n - ${prefix}adm status [status] \n **status:**  \n     |online \n     |dnd \n     |invisible`)
}

//Mudar status do bot
function status(msg){
    const content = msg.content.substr(12)

    msg.channel.send("Definindo o status para: " + content)
    bot.user.setStatus(content)

//Status que funcioanam
//online
//dnd
//invisible
//  
}