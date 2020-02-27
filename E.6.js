function buscarCep(cep) {
    var script = document.createElement('script');

    script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=myCallback'
    document.body.appendChild(script);
}

function myCallback(retorno) {
    if (!("erro" in retorno)) {
        let info = retorno.logradouro + " " + retorno.complemento + ", " + retorno.uf
        console.log(info)
    }
    else {
        console.log("CEP não encontrado.")
    }
}