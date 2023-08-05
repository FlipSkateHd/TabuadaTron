function tabuada() {
    var numero = Number(document.getElementById('input').value)
    var tabela = document.getElementById("tabela");

    var novaLinha = tabela.insertRow();
    var celula1 = novaLinha.insertCell(0);

    for(let fator = 0; fator<= 10; fator++){
        var novaLinha = tabela.insertRow();

        celula1.innerHTML = `${numero} x ${fator} = ${numero * fator}`
        celula1 = novaLinha.insertCell(0);

    }
    
}
