module.exports = (msg) =>{

    
    
    const valoresS = msg.content.substr(7)
    const valoresA = valoresS.split(", ")
    
    const valoresN = num(valoresA)
    console.log(valoresN)


    const conta = soma(valoresN)/valoresN.length



    msg.channel.send("valor de sua média: " + conta)

    //console.log(valores)
}

function soma(arr){
    let valor;
    arr.forEach((num, p)=>{
        if(valor > 0){
            valor = valor + num
        }else{
            valor = num
        }
    })
    return valor
}

function num(arr){
    return arr.map(value => parseInt(value))
}