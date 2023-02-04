
console.log('mostrar o document', document);

console.log(document.querySelector(".botao-trailer"));
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;

const botaoTrailer = document.querySelector(".botao-trailer");
//indentificar quando o usuario clicou no botão
function alternarModal(){

 //abrir modal na tela
 modal.classList.toggle("aberto")

}
botaoTrailer.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", linkDoVideo);
});

const botaoFecharModal = document.querySelector(".fechar-modal");
botaoFecharModal.addEventListener("click", () => {
    alternarModal();
    video.setAttribute("src", "");
});

