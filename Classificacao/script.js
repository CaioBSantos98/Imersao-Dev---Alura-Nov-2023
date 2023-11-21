var playersList = [];
var player = {};

var elementoTabela = document.getElementById("tabelaJogadores");

function exibirNaTela(list) {
  elementoTabela.innerHTML = "";
  playersList.sort(function ordernar(a, b) {
    return b.pontos - a.pontos;
  });

  for (var i = 0; i < playersList.length; i++) {
    elementoTabela.innerHTML += `
        <tr>
          <td>#${i + 1} - ${list[i].nome}</td>
          <td>${list[i].vitoria}</td>
          <td>${list[i].empate}</td>
          <td>${list[i].derrota}</td>
          <td>${list[i].pontos}</td>
          <td><button onClick="adicionarVitoria(${i})">Vitória</button></td>
          <td><button onClick="adicionarEmpate(${i})">Empate</button></td>
          <td><button onClick="adicionarDerrota(${i})">Derrota</button></td>
        </tr>
        `;
  }
}

function adicionarVitoria(indice) {
  playersList[indice].vitoria++;
  playersList[indice].pontos += 3;

  exibirNaTela(playersList);
}

function adicionarEmpate(indice) {
  playersList[indice].empate++;
  playersList[indice].pontos++;
  exibirNaTela(playersList);
}

function adicionarDerrota(indice) {
  playersList[indice].derrota++;
  exibirNaTela(playersList);
}

function addPlayer() {
  player = {
    nome: document.getElementById("nickname").value,
    vitoria: 0,
    empate: 0,
    derrota: 0,
    pontos: 0
  };

  playersList.push(player);
  exibirNaTela(playersList);
  document.getElementById("nickname").value = "";
}
