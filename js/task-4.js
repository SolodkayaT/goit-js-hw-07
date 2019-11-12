const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector(
  'button[data-action="decrement"]',
);
const totalSpan = document.querySelector('#value');
let count = 0;
function decrHandleClick() {
  count -= 1;
  totalSpan.textContent = count;
}
function addHandleClick() {
  count += 1;
  totalSpan.textContent = count;
}

incrementBtn.addEventListener('click', addHandleClick);
decrementButton.addEventListener('click', decrHandleClick);
totalSpan.textContent = count;
