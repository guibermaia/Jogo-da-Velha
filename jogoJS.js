var escB;

vetorzinho = new Array(9).fill(null);//.fill preenche todos os campos com o que estabelecer entre os parenteses
function escolha(p) {
    novoJogo();//chamando a função para limpar a tela
    document.getElementById("resultado").innerHTML = '';//limpando o mostra ganhador
    // document.getElementById("aviso").innerHTML = ''; //limpando o aviso
    escB = p;// x é o parametro de x e O é o parametro de O
}

function novoJogo() {
    vetorzinho = new Array(9).fill(null);
    
    document.getElementById("e0").innerHTML = ''; //cada posição volta para tela inicial
    document.getElementById("e1").innerHTML = '';
    document.getElementById("e2").innerHTML = '';
    document.getElementById("e3").innerHTML = '';
    document.getElementById("e4").innerHTML = '';
    document.getElementById("e5").innerHTML = '';
    document.getElementById("e6").innerHTML = '';
    document.getElementById("e7").innerHTML = '';
    document.getElementById("e8").innerHTML = '';
}

function para() {
    for (let i = 0; i < 9; i++) { //percorre todas as posições 
        if (vetorzinho[i] == null) { //verificar as posições que estiverem nulas
            vetorzinho[i] = 9; //preenche o vetor com o elemento 1 para o jogo "travar"
        }
    }
}

function campo(va) {
    if ((va == 0) && (vetorzinho[0] == null)) {
        if (escB == 'x') {
            document.getElementById("e0").innerHTML = 'x'; //escrevendo X no valor do elemento passado pelo ID
            escB = 'o';
            vetorzinho[0] = 'x'; //se for igual a x o vetorzinho na posição 0 recebe x
        }
        else {
            document.getElementById("e0").innerHTML = 'o';
            escB = 'x';
            vetorzinho[0] = 'o'; //se for o o vetorzinho na posição 0 recebe o
        }
    }
    else if ((va == 1) && (vetorzinho[1] == null)) {
        if (escB == 'x') {
            document.getElementById("e1").innerHTML = 'x';
            escB = 'o';
            vetorzinho[1] = 'x';
        }
        else {
            document.getElementById("e1").innerHTML = 'o';
            escB = 'x'
            vetorzinho[1] = 'o';
        }
    }
    else if ((va == 2) && (vetorzinho[2] == null)) {
        if (escB == 'x') {
            document.getElementById("e2").innerHTML = 'x';
            escB = 'o';
            vetorzinho[2] = 'x';
        }
        else {
            document.getElementById("e2").innerHTML = 'o';
            escB = 'x';
            vetorzinho[2] = 'o';
        }
    }
    else if ((va == 3) && (vetorzinho[3] == null)) {
        if (escB == 'x') {
            document.getElementById("e3").innerHTML = 'x';
            escB = 'o';
            vetorzinho[3] = 'x';
        }
        else {
            document.getElementById("e3").innerHTML = 'o';
            escB = 'x';
            vetorzinho[3] = 'o';
        }
    }
    else if ((va == 4) && (vetorzinho[4] == null)) {
        if (escB == 'x') {
            document.getElementById("e4").innerHTML = 'x';
            escB = 'o';
            vetorzinho[4] = 'x';
        }
        else {
            document.getElementById("e4").innerHTML = 'o';
            escB = 'x';
            vetorzinho[4] = 'o';
        }
    }
    else if ((va == 5) && (vetorzinho[5] == null)) {
        if (escB == 'x') {
            document.getElementById("e5").innerHTML = 'x';
            escB = 'o';
            vetorzinho[5] = 'x';
        }
        else {
            document.getElementById("e5").innerHTML = 'o';
            escB = 'x'
            vetorzinho[5] = 'o';
        }
    }
    else if ((va == 6) && (vetorzinho[6] == null)) {
        if (escB == 'x') {
            document.getElementById("e6").innerHTML = 'x';
            escB = 'o'
            vetorzinho[6] = 'x';
        }
        else {
            document.getElementById("e6").innerHTML = 'o';
            escB = 'x';
            vetorzinho[6] = 'o';
        }
    }
    else if ((va == 7) && (vetorzinho[7] == null)) {
        if (escB == 'x') {
            document.getElementById("e7").innerHTML = 'x';
            escB = 'o';
            vetorzinho[7] = 'x';
        }
        else {
            document.getElementById("e7").innerHTML = 'o';
            escB = 'x';
            vetorzinho[7] = 'o';
        }
    }
    else if ((va == 8) && (vetorzinho[8] == null)) {
        if (escB == 'x') {
            document.getElementById("e8").innerHTML = 'x';
            escB = 'o';
            vetorzinho[8] = 'x';
        }
        else {
            document.getElementById("e8").innerHTML = 'o';
            escB = 'x';
            vetorzinho[8] = 'o';
        }
    }
    verifica()
}

function verifica() {
    if ((vetorzinho[0] == vetorzinho[1]) && (vetorzinho[1] == vetorzinho[2]) && (vetorzinho[0] != null)) { //compara as 3 casas de cima na horizontal
        if (vetorzinho[0] == 'x') { //verifica se o elemento é o x
            document.getElementById("resultado").innerHTML = "Ganhador: X"; //printa na tela o ganhador X
            para();
            document.getElementById("aviso").innerHTML = "Fim do jogo! click em Novo jogo para jogar novamente!"
            var element = document.getElementsByClassName("l1")[0];
            element.classList.add("mostra-r");
        }
        else {
            document.getElementById("resultado").innerHTML = "Ganhador: O"; // printa na tela o ganhador O
            para();
            document.getElementById("aviso").innerHTML = "Fim do jogo! click em Novo jogo para jogar novamente!"
            var element = document.getElementsByClassName("l1")[0];
            element.classList.add("mostra-r");
        }
    }
    // compara as 3 casas do meio na horizontal
    else if ((vetorzinho[3] == vetorzinho[4]) && (vetorzinho[4] == vetorzinho[5]) && (vetorzinho[3] != null)) {
        if (vetorzinho[3] == 'x') {
            document.getElementById("resultado").innerHTML = "Ganhador: X";
            para();
            document.getElementById("aviso").innerHTML = "Fim do jogo! click em Novo jogo para jogar novamente!"
            var element = document.getElementsByClassName("l2")[0];
            element.classList.add("mostra-r");
        }
        else {
            document.getElementById("resultado").innerHTML = "Ganhador: O";
            para();
            document.getElementById("aviso").innerHTML = "Fim do jogo! click em Novo jogo para jogar novamente!"
            var element = document.getElementsByClassName("l2")[0];
            element.classList.add("mostra-r");
        }
    }
    // compara as 3 casas de baixo na horizontal
    else if ((vetorzinho[6] == vetorzinho[7]) && (vetorzinho[7] == vetorzinho[8]) && (vetorzinho[6] != null)) {
        if (vetorzinho[6] == 'x') {
            document.getElementById("resultado").innerHTML = "Ganhador: X";
            para();
            document.getElementById("aviso").innerHTML = "Fim do jogo! click em Novo jogo para jogar novamente!"
            var element = document.getElementsByClassName("l3")[0];
            element.classList.add("mostra-r");
        }
        else {
            document.getElementById("resultado").innerHTML = "Ganhador: O";
            para();
            document.getElementById("aviso").innerHTML = "Fim do jogo! click em Novo jogo para jogar novamente!"
            var element = document.getElementsByClassName("l3")[0];
            element.classList.add("mostra-r");
        }
    }
    // compara as 3 casas da esquerda na vertical
    else if ((vetorzinho[0] == vetorzinho[3]) && (vetorzinho[3] == vetorzinho[6]) && (vetorzinho[0] != null)) {
        if (vetorzinho[0] == 'x') {
            document.getElementById("resultado").innerHTML = "Ganhador: X";
            para();
            document.getElementById("aviso").innerHTML = "Fim do jogo! click em Novo jogo para jogar novamente!"
            var element = document.getElementsByClassName("c1")[0];
            element.classList.add("mostra-r");
        }
        else {
            document.getElementById("resultado").innerHTML = "Ganhador: O";
            para();
            document.getElementById("aviso").innerHTML = "Fim do jogo! click em Novo jogo para jogar novamente!"
            var element = document.getElementsByClassName("c1")[0];
            element.classList.add("mostra-r");
        }
    }
    // compara as 3 casas do meio na vertical
    else if ((vetorzinho[1] == vetorzinho[4]) && (vetorzinho[4] == vetorzinho[7]) && (vetorzinho[1] != null)) {
        if (vetorzinho[1] == 'x') {
            document.getElementById("resultado").innerHTML = "Ganhador: X";
            para();
            document.getElementById("aviso").innerHTML = "Fim do jogo! click em Novo jogo para jogar novamente!"
            var element = document.getElementsByClassName("c2")[0];
            element.classList.add("mostra-r");
        }
        else {
            document.getElementById("resultado").innerHTML = "Ganhador: O";
            para();
            document.getElementById("aviso").innerHTML = "Fim do jogo! click em Novo jogo para jogar novamente!"
            var element = document.getElementsByClassName("c2")[0];
            element.classList.add("mostra-r");
        }
    }
    // compara as 3 casas da direita na vertical
    else if ((vetorzinho[2] == vetorzinho[5]) && (vetorzinho[5] == vetorzinho[8]) && (vetorzinho[2] != null)) {
        if (vetorzinho[2] == 'x') {
            document.getElementById("resultado").innerHTML = "Ganhador: X";
            para();
            document.getElementById("aviso").innerHTML = "Fim do jogo! click em Novo jogo para jogar novamente!"
            var element = document.getElementsByClassName("c3")[0];
            element.classList.add("mostra-r");
        }
        else {
            document.getElementById("resultado").innerHTML = "Ganhador: O";
            para();
            document.getElementById("aviso").innerHTML = "Fim do jogo! click em Novo jogo para jogar novamente!"
            var element = document.getElementsByClassName("c3")[0];
            element.classList.add("mostra-r");
        }
    }
    //compara a diagonal da esquerda para direita
    else if ((vetorzinho[0] == vetorzinho[4]) && (vetorzinho[4] == vetorzinho[8]) && (vetorzinho[0] != null)) {
        if (vetorzinho[0] == 'x') {
            document.getElementById("resultado").innerHTML = "Ganhador: X";
            para();
            document.getElementById("aviso").innerHTML = "Fim do jogo! click em Novo jogo para jogar novamente!"
            var element = document.getElementsByClassName("d1")[0];
            element.classList.add("mostra-r");
        }
        else {
            document.getElementById("resultado").innerHTML = 'Ganhador: O';
            para();
            document.getElementById("aviso").innerHTML = "Fim do jogo! click em Novo jogo para jogar novamente!"
            var element = document.getElementsByClassName("d1")[0];
            element.classList.add("mostra-r");
        }
    }
    // compara a diagonal da direita para esquerda
    else if ((vetorzinho[2] == vetorzinho[4]) && (vetorzinho[4] == vetorzinho[6]) && (vetorzinho[2] != null)) {
        if (vetorzinho[2] == 'x') {
            document.getElementById("resultado").innerHTML = "Ganhador: X";
            para();
            document.getElementById("aviso").innerHTML = "Fim do jogo! click em Novo jogo para jogar novamente!"
            var element = document.getElementsByClassName("d2")[0];
            element.classList.add("mostra-r");
        }
        else {
            document.getElementById("resultado").innerHTML = "Ganhador: O";
            para();
            document.getElementById("aviso").innerHTML = "Fim do jogo! click em Novo jogo para jogar novamente!"
            var element = document.getElementsByClassName("d2")[0];
            element.classList.add("mostra-r");
        }
    }
    else if (vetorzinho.indexOf(null) == -1) {
        document.getElementById("resultado").innerHTML = "Velha";
        var element = document.getElementsByClassName("img-velha")[0];
        element.classList.add("mostra");
        document.getElementById("aviso").innerHTML = "Fim do jogo! click em Novo jogo para jogar novamente!"//temporizador 100 ms
    }
}

function atualiza() {
    location.reload();//atualiza a página quando a função é chamada
}