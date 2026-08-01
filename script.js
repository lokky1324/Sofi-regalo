function createHeart() {
  const h = document.createElement('div');
  h.className = 'heart';
  h.textContent = '❤';
  h.style.left = Math.random() * 100 + 'vw';
  h.style.animationDuration = (4 + Math.random() * 3) + 's';
  document.body.appendChild(h);
  setTimeout(() => h.remove(), 7000);
}

setInterval(createHeart, 650);

const intro = document.getElementById('intro');
const cats = document.getElementById('cats');
const gift = document.getElementById('gift');
const letter = document.getElementById('letter');
const gray = document.getElementById('gray');
const white = document.getElementById('white');

const startBtn = document.getElementById('start');
const giftBox = document.getElementById('giftBox');

if (startBtn) {
  startBtn.onclick = () => {
    intro.classList.add('hidden');
    cats.classList.remove('hidden');

    setTimeout(() => {
      gray.style.left = '90px';
      white.style.right = '90px';
    }, 200);

    setTimeout(() => {
      cats.classList.add('hidden');
      gift.classList.remove('hidden');
    }, 3200);
  };
}

if (giftBox) {
  giftBox.onclick = () => {
    gift.classList.add('hidden');
    letter.classList.remove('hidden');
  };
}
