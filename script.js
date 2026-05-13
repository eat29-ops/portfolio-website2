const btn = document.getElementById('changeBtn');
const msg = document.getElementById('message');

if (btn && msg) {
  btn.addEventListener('click', () => {

    const nowAlt = msg.classList.toggle('alt');

    msg.textContent = nowAlt
      ? 'Color changed!'
      : 'Click the button to see JavaScript work!';
  });
}