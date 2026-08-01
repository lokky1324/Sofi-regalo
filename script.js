const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const startButton = document.getElementById('startButton');

title.textContent = CONFIG.intro[0];
subtitle.textContent = CONFIG.intro[1];
startButton.textContent = CONFIG.boton;

startButton.addEventListener('click', () => {
    title.textContent = 'Nuestra historia empieza ahora ❤️';
    subtitle.textContent = 'Muy pronto vas a ver a nuestros gatitos encontrarse.';
    startButton.style.display = 'none';
});

