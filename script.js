const title = document.getElementById('title');
const subtitle = document.getElementById('subtitle');
const startButton = document.getElementById('startButton');

title.textContent = 'Sofi...';
subtitle.textContent = 'Hice algo muy especial para vos ❤️';
startButton.textContent = '✨ Abrir mi regalo ✨';

startButton.onclick = function () {
  title.textContent = 'Nuestra historia empieza ahora ❤️';
  subtitle.textContent = 'Y muy pronto aparecerán nuestros gatitos.';
  startButton.style.display = 'none';
};

