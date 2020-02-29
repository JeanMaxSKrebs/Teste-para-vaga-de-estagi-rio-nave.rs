function removerNumeros(string) {
    let newString = ""
    for (i = 0; i < string.length; i++) {
        console.log(string.indexOf(' '))

        if (isNumberOrSpacebar(string.substring(i, i + 1))) {
            if (string.indexOf(' ') >= -1)
                newString += "[removido]"
            if(isNumberOrSpacebar(string.substring(i+1, i + 2))){
                i++
                if(isNumberOrSpacebar(string.substring(i+2, i + 1)))
                    i++
            }
        } else
            newString += string.substring(i, i + 1)

    }
    console.log(newString)
}

// funcao para retirar espaços e numeros
function isNumberOrSpacebar(num) {

    return !isNaN(parseFloat(num)) && isFinite(num)
}
// removerNumeros("Olá 250 teste 2 olá 15 a 2000")