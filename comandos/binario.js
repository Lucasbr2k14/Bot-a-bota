module.exports = {
    run(msg, parameter){
    
        if(parameter[1] == "b"){
            msg.channel.send(toBinary(parameter[2]))
        }

    },
    description:"Para converter inteiro para binário e de binário para inteiro.",
    exemple:"binario b valor"
}
function toBinary(number){
    
    let num = parseInt(number)
    let binary = (num % 2).toString()

    while(num > 1){
        num = (num / 2)
        binary = parseInt(num % 2) + binary
    }
    return binary
}


