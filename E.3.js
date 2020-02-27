function agrupamentoString() {
    for (i = 0; i < arguments.length; i++)
        console.log(arguments[i])

}

function agruparString() {
    let agrupamento = "";
    for (i = 0; i < arguments.length; i++) {
        agrupamento += arguments[i] + " "

    }
    console.log(agrupamento)
}