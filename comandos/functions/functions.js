module.exports = {
    num: (arr) =>{
        return arr.map(value => parseInt(value))
    },
    par: (numero) =>{
        const valor = numero%2
        if(valor == 1){
            return false
        }else{
            return true
        }
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
    }
}