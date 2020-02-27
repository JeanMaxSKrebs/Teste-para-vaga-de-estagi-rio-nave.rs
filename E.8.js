// usei reducer do https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce 
const reducer = (accumulator, currentValue) => accumulator + currentValue;

function somaIdades(arr) {
    let soma = []

    for (let i = 0; i < arr.length; i++) {
        soma[i] = arr[i].idade
    }
    return soma.reduce(reducer)
}