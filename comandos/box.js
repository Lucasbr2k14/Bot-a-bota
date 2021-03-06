module.exports = {
    run(msg){
        const text = msg.content.substr(5)
        //até 57
        if(text.length <= 57 && text.length > 0){
            const box2 = box(text)
            msg.channel.send("```\n" + box2 + "```")
        }else if(text.length <= 0){
            msg.channel.send("[404] error, Não há texto.")
        }
        else{
            msg.channel.send(`O seu texto é muito grande, ele tem: ${text.length} e só suportamos 57.`)
        }
    },
    description:"Criar uma caixa com até 57 caracteres",
    exemple:"box texto"
}

function multi(v, s){
    
    let valor;
    let i;

    for(i = 0; i < v; i++){
        valor = valor ? valor = valor + s : valor = s
    }

    return valor
}

function box(s){
    const strings = `| ${s} |`
    const tamanho = strings.length
    return `+${multi(tamanho-2, "-")}+\n${strings}\n+${multi(tamanho-2, "-")}+`
}