const gravidade = 9.81;
let tempo = prompt("informe o tempo em segundos");
let distancia = Math.round(0.5*gravidade*tempo*tempo);

alert(distancia);