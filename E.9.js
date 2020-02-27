function verificaMenorIdade(arr, idade) {
    let menorIdade = []
    for (let i = 0; i < arr.length; i++) {
        if(arr[i].idade<idade)
            menorIdade.push(arr[i])
    }
    return menorIdade
}