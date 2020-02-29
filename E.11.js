function ordenarArray(array) {

    array.sort(function (a, b) {
        if (a.idade > b.idade)
            return -1
        if (a.idade < b.idade)
            return 1

        return 0
    })
    console.log(array);
}
