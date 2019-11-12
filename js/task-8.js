const refs = {
  input: document.querySelector('input[type="number"]'),
  render: document.querySelector('button[data-action="render"]'),
  destroy: document.querySelector('button[data-action="destroy"]'),
  boxes: document.querySelector('#boxes'),
};
function getRundomColor() {
  return Math.floor(Math.random() * 256);
}
function getColorRGB() {
  return `rgb(${getRundomColor()}, ${getRundomColor()}, ${getRundomColor()})`;
}
const BOXSIZE = 30;
function createBoxes(amount) {
  return Array(amount)
    .fill('')
    .map((e, i) => {
      const div = document.createElement('div');
      div.style.cssText = `width: ${BOXSIZE + i * 10}px; height: ${BOXSIZE
        + i * 10}px; background-color: ${getColorRGB()}`;
      return div;
    });
}
function setBoxes() {
  const num = +refs.input.value;
  refs.boxes.append(...createBoxes(num));
}
function clearBoxes() {
  refs.boxes.innerHTML = '';
  refs.input.value = '';
}
refs.render.addEventListener('click', setBoxes);
refs.destroy.addEventListener('click', clearBoxes);
