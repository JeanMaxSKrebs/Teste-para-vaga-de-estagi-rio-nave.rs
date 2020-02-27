function removerNumeros(string) {
    let newString = ""
    for (i = 0; i < string.length; i++)
    {
        if(isNumberOrSpacebar(string.substring(i,i+1)))
            newString += "[removido]" 
        else
            newString += string.substring(i,i+1)

        }
        console.log(newString)
}

// funcao para retirar espaços e numeros
function isNumberOrSpacebar(num) {

    return !isNaN(parseFloat(num)) && isFinite(num)
}