let dicionario = { 4: 'a', 3: 'e', 1: 'i', 5: 's' }

function verificarDicionario(string) {
    let newString = ""
    for (let i = 0; i < string.length; i++) {
        indice = string.substring(i, i + 1)
        //isNumberOrSpacebar definido no E.4.js
        if (!trocarNumerosDicionario(indice) == false) {
            newString += trocarNumerosDicionario(indice)
        } else {
            newString += string.substring(i, i + 1)
        }

    }
    console.log(newString)
}

function trocarNumerosDicionario(num) {

    for (let i = 0; i < Object.keys(dicionario).length; i++) {
        if (num == Object.keys(dicionario)[i])
            return Object.values(dicionario)[i]
    }
    return false
}