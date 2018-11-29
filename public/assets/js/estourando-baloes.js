var qtdBalao;
var intervalo;

function iniciarJogo() {
  
  var url = location.href; // Return the href property:
  var nivel = url.split("?")[1];
  var tempo;
  qtdBalao = 80;

  switch (nivel) {
    case '1':
      tempo = 120;
      break;

    case '2':
      tempo = 60;
      break;

    case '3':
      tempo = 30;
      break;
  }

  criarBalao();

  // Update timer time
  document.getElementById('tempo').innerHTML = tempo;

  // The setInterval() method calls a function or evaluates an expression at specified intervals (in milliseconds). The setInterval() method will continue calling the function until clearInterval() is called, or the window is closed.
  intervalo = setInterval(contarTempo, 1000);
}

function criarBalao() {
  
  for (var i = 1; i <= qtdBalao; i++) {
    
    // <img class="img-fluid img-balao" src="public/dist/img/game-screen/balao-azul-pequeno-inteiro.png" alt="Balão azul pequeno inteiro">
    var balao = document.createElement("img");
    balao.setAttribute("id", "b" + i);
    balao.setAttribute("class", "img-fluid img-balao");
    balao.setAttribute("src", "public/dist/img/game-screen/balao-azul-pequeno-inteiro.png");
    balao.setAttribute("alt", "Balão azul pequeno inteiro");
    balao.setAttribute("onclick", "estourar(this)");

    document.getElementById('cenario').appendChild(balao);
  }
}

function estourar(balao) {
  
  balao.setAttribute("src", "public/dist/img/game-screen/balao-azul-pequeno-estourado.png");
  balao.setAttribute("alt", "Balão azul pequeno estourado");
  balao.setAttribute("onclick", "");

  var qtdInteiro = parseInt(document.getElementById('qtdInteiro').innerHTML);
  qtdInteiro = --qtdInteiro;
  document.getElementById('qtdInteiro').innerHTML=  qtdInteiro;

  var qtdEstourado = parseInt(document.getElementById('qtdEstourado').innerHTML);
  qtdEstourado = ++qtdEstourado;
  document.getElementById('qtdEstourado').innerHTML=  qtdEstourado;

  if (qtdInteiro == 0) {
    // The clearInterval() method clears a timer set with the setInterval() method.
    clearInterval(intervalo);
    
    // The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds. The function is only executed once.
    setTimeout(function(){ alert('Parabéns! Você estourou todos os balões no tempo.'); }, 500);
  }
}

function contarTempo() {
  
  var tempo = parseInt(document.getElementById('tempo').innerHTML);
  tempo = --tempo;
  document.getElementById('tempo').innerHTML = tempo; // Update timer time

  if (tempo == 0) {
    // The clearInterval() method clears a timer set with the setInterval() method.
    clearInterval(intervalo);
    pararEstouro();

    // The setTimeout() method calls a function or evaluates an expression after a specified number of milliseconds. The function is only executed once.
    setTimeout(function(){ alert('Você perdeu! Você não conseguiu estourar todos os balões no tempo.'); }, 500);
  }
}

function pararEstouro() {
  
  for (var i = 1; i <= qtdBalao; i++) {

    var balao = document.getElementById('b' + i);

    if (balao.getAttribute("onclick") != "") {
      balao.setAttribute("onclick", "");
    }
  }
}