const reducer = (accumulator, currentValue) => accumulator + currentValue.idade

function somaIdades(arr) {
    return arr.reduce(reducer,0)
}
somaIdades(arrayObjetos)