console.log("alerta");

const titulo = document.querySelector(".titulo");
const btn =  document.querySelector("button");


btn.addEventListener("click", function(){
    titulo.style.color= blue;
})

function cambiaColor(){
    titulo.style.backgroung = "red";

}