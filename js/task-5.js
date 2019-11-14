const refs = {
  input: document.querySelector('#name-input'),
  name: document.querySelector('#name-output'),
};
const defaultValue = 'Незнакомец';
function handleInput(event) {
  console.log(event);
  event.preventDefault();
  const { target } = event;
  console.log(target.value);
  if (target.value) {
    refs.name.textContent = target.value;
  } else {
    refs.name.textContent = defaultValue;
  }
}
refs.input.addEventListener('input', handleInput);
