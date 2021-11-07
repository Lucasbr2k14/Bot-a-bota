module.exports = (msg) =>{
    
    const nome = msg.content.substr(10)
    if(nome && nome.length < 32){

        msg.channel.send(`O nome do bot foi mudado para: ${nome}`).then((m) =>{
            m.member.setNickname(nome)
        })
    }else if(nome.length > 32){
        msg.channel.send(`O nome que você deu tem ${nome.length} caracters e o maximo é de 32.`)
    }else{
        msg.channel.send("Escreva um nome para o bot.")
    }

}