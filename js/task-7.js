const input = document.querySelector('#font-size-control');
const span = document.querySelector('#text');

function inputChangeSize() {
  span.style.fontSize = `${input.value}px`;
}
input.addEventListener('input', inputChangeSize);
