module.exports = (msg) =>{

    
    
    const valoresS = msg.content.substr(7)
    const valoresA = valoresS.split(", ")
    
    const valoresN = num(valoresA)

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
    const array = []
    arr.forEach((string) => {
        const num = Number(string)
        array.push(num)        
    })
    return array
}