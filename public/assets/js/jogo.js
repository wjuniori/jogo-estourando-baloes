function iniciarJogo() {
  
  var qtdBalao = 80;
  var url = location.href; // Return the href property:
  var nivel = url.split("?")[1];
  var tempo;

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

  document.getElementById('tempo').innerHTML = tempo; // Update timer time

  criarBalao(qtdBalao);
}

function criarBalao(qtdBalao) {
  
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
    alert('Parabéns! Você estourou todos os balões no tempo.');
  }
}