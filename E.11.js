function ordenarDecrescenteIdade(arr) {

    let arrayDecrescente = []
    let menor = null
    let menorIdade = 150
    let menorIdadeId = arr.length + 1



    for (let i = 0; i < arr.length; i++) {
        if (menorIdade > arr[i].idade) {
            menor = arr[i]
            // console.log(menor)
            menorIdade = menor.idade
            menorIdadeId = menor.id
            arrayDecrescente.push(menor)

        } else
            if (menorIdade < arr[i].idade) {
                // console.log(arr[i].idade, arrayDecrescente[0].idade)
                if (arr[i].idade == arrayDecrescente[0].idade) {
                    if (arr[i].id > arrayDecrescente[0].id)
                        arrayDecrescente.splice(1, 0, arr[i])
                    else
                        arrayDecrescente.unshift(arr[i])

                } else
                    if (arr[i].idade > arrayDecrescente[0].idade) {
                        // console.log("maior")
                        arrayDecrescente.unshift(arr[i])
                    } else
                        if (arr[i].idade < arrayDecrescente[arrayDecrescente.length - 1].idade) {
                            // console.log("menor")
                            arrayDecrescente.push(arr[i])
                        } else {
                            // console.log("no meio")
                            for (let j = 0; j < arrayDecrescente.length; j++) {
                                if (arr[i].idade != arrayDecrescente[j].idade) {
                                    if (arr[i].idade < arrayDecrescente[j].idade && arr[i].idade > arrayDecrescente[j + 1].idade) {
                                        arrayDecrescente.splice(j + 1, 0, arr[i])
                                    } else
                                        if (arr[i].idade < arrayDecrescente[j].idade && arr[i].idade == arrayDecrescente[j + 1].idade)
                                            if (arr[i].id != arrayDecrescente[j + 1].id)
                                                if (arr[i].id > arrayDecrescente[j + 1].id)
                                                    arrayDecrescente.splice(j + 2, 0, arr[i])
                                                else
                                                    arrayDecrescente.splice(j + 1, 0, arr[i])
                                }
                            }
                        }
            } else
                if (menorIdade == arr[i].idade) {
                    if (menorIdadeId != arr[i].id)
                        if (menorIdadeId < arr[i].id) {

                            arrayDecrescente.push(arr[i])
                        }
                        else {
                            arrayDecrescente.pop()
                            arrayDecrescente.push(arr[i])
                            arrayDecrescente.push(menor)
                        }

                }
    }
    // console.log(arrayDecrescente)

    let arrIdades = []

    arrayDecrescente.forEach(a => {

        if (arrIdades.length == 0) {
            arrIdades[arrIdades.length] = a.idade
        }
        if (arrIdades.indexOf(a.idade) == -1) {
            arrIdades[arrIdades.length] = a.idade
        }
    });

    // console.log(arrIdades)

    let idObjetoArrays = {}

    arrIdades.forEach(a => {
        let arrayId = []


        for (let i = 0; i < arrayDecrescente.length; i++) {
            if (arrayDecrescente[i].idade == a) {
                arrayId.push(arrayDecrescente[i].id)
            }
        }
        //retorna array ordenado
        arrayId.sort(function (a, b) { return a - b; })
        idObjetoArrays[a] = arrayId

    })

    // console.log(idObjetoArrays)
    // console.log(arrayDecrescente)

    let array = []

    arrIdades.forEach(a => {
        // console.log(a)
        idObjetoArrays[a].forEach(b => {
            // console.log(b)
            for (let i = 0; i < arrayDecrescente.length; i++) {
                if(arrayDecrescente[i].id==b)
                    array.push(arrayDecrescente[i])
            }
            // console.log(array)


        })
    })
    return array;
}