/* ==========================================
   REGALO PARA SOFI ❤️
   SCRIPT.JS - PARTE 1
========================================== */

// Elementos
const title = document.getElementById("title");
const subtitle = document.getElementById("subtitle");
const startButton = document.getElementById("startButton");

// Ocultamos el botón al iniciar
startButton.style.display = "none";

// Escribir texto letra por letra
function escribir(elemento, texto, velocidad, callback){

    elemento.textContent = "";

    let i = 0;

    const intervalo = setInterval(() => {

        elemento.textContent += texto.charAt(i);

        i++;

        if(i >= texto.length){

            clearInterval(intervalo);

            if(callback){
                callback();
            }

        }

    }, velocidad);

}

// Inicio de la página
window.addEventListener("load", () => {

    escribir(title, CONFIG.intro[0], 90, () => {

        escribir(subtitle, CONFIG.intro[1], 45, () => {

            startButton.style.display = "inline-block";

        });

    });

});

// Botón
startButton.addEventListener("click", () => {

    title.textContent = "❤️ Gracias por entrar...";
    subtitle.textContent = "Ahora empieza nuestra historia.";

    startButton.style.display = "none";

});