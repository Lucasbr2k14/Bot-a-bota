module.exports = {
    num: (arr) =>{
        return arr.map(value => parseInt(value))
    },
    par: (numero) =>{
        const valor = numero%2
        const impar_par = [true, false]
        return impar_par[valor]
    },
    soma: (arr)=>{
        let valor;
        arr.forEach((num, p)=>{
            if(valor > 0){
                valor = valor + num
            }else{
                valor = num
            }
        })
        return valor
    },
    lerJson:(arquivo) =>{
        const fs = require("fs")
        const string = fs.readFileSync(arquivo, "utf-8")
        const Json = JSON.parse(string)
        return Json
    },
    escreverJson : (arquivo, escrever, onde) =>{
        const fs = require("fs")
        const string = fs.readFileSync(arquivo, "utf-8")
        const Json = JSON.parse(string)
        Json.Piadas.push(escrever)
        const JsonS = JSON.stringify(Json, null, 4)
        return fs.writeFileSync(arquivo, JsonS)
    },
}