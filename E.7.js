let arrayObjetos = [
    {id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42},
    {id: 2, nome: 'daniel', sobrenome: 'gonçalves',  idade: 21},
    {id:3, nome: 'matheus', sobrenome: 'garcia', idade: 28},
    {id: 4, nome: 'gabriel', sobrenome: 'pinheiro',  idade: 21}
]
function saudacao(arr) {
    let arraySaudacao = []
    for (let i = 0; i < arr.length; i++) {
        let nome = utilizarFuncao(primeiraMaiuscula, arr[i].nome)

        arraySaudacao[i] = "Olá, " + nome + " " + arr[i].sobrenome + "!"
    }
    // parte comentado caso retorno for em array
    // let arrayRetorno = []
    for (let i = 0; i < arraySaudacao.length; i++) {
        console.log(arraySaudacao[i])
        // arrayRetorno[i] = arraySaudacao[i]
    }
    // return arrayRetorno
}

function primeiraMaiuscula(str) {

    let primeiraLetraMaiuscula = str.slice(0, 1).toUpperCase()

    let newString = primeiraLetraMaiuscula

    for (i = 1; i < str.length; i++) {
        newString += str.substring(i, i + 1)
    }
    return newString
}