let pontos = 0;

const itens =
document.querySelectorAll(".item");

const lixeiras =
document.querySelectorAll(".lixeira");

itens.forEach(item => {

item.addEventListener("dragstart", () => {

item.classList.add("arrastando");

});

item.addEventListener("dragend", () => {

item.classList.remove("arrastando");

});

});

lixeiras.forEach(lixeira => {

lixeira.addEventListener("dragover", e => {

e.preventDefault();

});

lixeira.addEventListener("drop", () => {

const item =
document.querySelector(".arrastando");

const tipoCorreto =
lixeira.dataset.tipo;

if(item.id === tipoCorreto){

pontos += 10;

document.getElementById("mensagem")
.innerHTML =
"✅ Acertou!";

item.remove();

}
else{

pontos -= 5;

document.getElementById("mensagem")
.innerHTML =
"❌ Lixeira incorreta!";

}

document.getElementById("pontos")
.innerHTML = pontos;

verificarVitoria();

});

});

function verificarVitoria(){

const restantes =
document.querySelectorAll(".item");

if(restantes.length === 0){

document.getElementById("mensagem")
.innerHTML =
"🏆 Parabéns! Você concluiu a coleta seletiva!";

}

}