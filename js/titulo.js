let titulo = "Restaurante da Candinha - "
posicao = 0
document.querySelector("body").onload = carrega();

function carrega() {
    setInterval(correTitulo, 300);
}

function correTitulo() {
    document.querySelector("title").innerHTML = titulo.substring(posicao, titulo.length) + " " + titulo.substring(0, posicao);
    posicao++;
    if (posicao >= titulo.length) {
        posicao = 0;
    }

    console.log(posicao);

}