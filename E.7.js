// let arrayObjetos = [
//     { id: 1, nome: 'juca', sobrenome: 'da silva', idade: 42 },
//     { id: 2, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 },
//     { id: 3, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
//     { id: 4, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 },
//     { id: 5, nome: 'juca', sobrenome: 'da silva', idade: 50 },
//     { id: 6, nome: 'daniel', sobrenome: 'gonçalves', idade: 42 },
//     { id: 7, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
//     { id: 8, nome: 'gabriel', sobrenome: 'pinheiro', idade: 51 },
//     { id: 9, nome: 'juca', sobrenome: 'da silva', idade: 42 },
//     { id: 10, nome: 'daniel', sobrenome: 'gonçalves', idade: 21 },
//     { id: 11, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
//     { id: 12, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 },
//     { id: 13, nome: 'juca', sobrenome: 'da silva', idade: 50 },
//     { id: 14, nome: 'daniel', sobrenome: 'gonçalves', idade: 42 },
//     { id: 15, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
//     { id: 16, nome: 'gabriel', sobrenome: 'pinheiro', idade: 51 },
//     { id: 17, nome: 'juca', sobrenome: 'da silva', idade: 42 },
//     { id: 18, nome: 'daniel', sobrenome: 'gonçalves', idade: 51 },
//     { id: 19, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
//     { id: 20, nome: 'gabriel', sobrenome: 'pinheiro', idade: 51 },
//     { id: 21, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
//     { id: 22, nome: 'gabriel', sobrenome: 'pinheiro', idade: 21 },
//     { id: 23, nome: 'juca', sobrenome: 'da silva', idade: 50 },
//     { id: 24, nome: 'daniel', sobrenome: 'gonçalves', idade: 42 },
//     { id: 25, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
//     { id: 26, nome: 'gabriel', sobrenome: 'pinheiro', idade: 51 },
//     { id: 27, nome: 'juca', sobrenome: 'da silva', idade: 42 },
//     { id: 28, nome: 'daniel', sobrenome: 'gonçalves', idade: 51 },
//     { id: 29, nome: 'matheus', sobrenome: 'garcia', idade: 28 },
//     { id: 30, nome: 'gabriel', sobrenome: 'pinheiro', idade: 51 }
// ]

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