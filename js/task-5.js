const refs = {
  input: document.querySelector('#name-input'),
  name: document.querySelector('#name-output'),
};

function handleInput(event) {
  event.preventDefault();
  const { target } = event;
  refs.name.textContent = target.value;
}
refs.input.addEventListener('input', handleInput);
