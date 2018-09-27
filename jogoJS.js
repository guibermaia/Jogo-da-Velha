var $ = document.getElementById.bind(document);
var valor
function escolhaBotao(es) {
    valor = es;
}

function campo(va) {
    if (valor != undefined) {
        $(va).innerHTML = valor;
        if (valor == "x") {
            escolhaBotao('o');
        }
        else {
            escolhaBotao('x');
        }
    } else {
        alert("Escolha X ou O para começar");
    }
}

va = new Array(9);

campo() = va[9];