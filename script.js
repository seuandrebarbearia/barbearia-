const menuToggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

menuToggle.addEventListener("click", () => {
menu.classList.toggle("ativo");
});

const elementos = document.querySelectorAll(".fade");

window.addEventListener("scroll", () => {

elementos.forEach(el => {

const posicao = el.getBoundingClientRect().top;
const tela = window.innerHeight - 100;

if(posicao < tela){
el.classList.add("show");
}

});

});