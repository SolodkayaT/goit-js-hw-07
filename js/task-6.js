const input = document.querySelector('#validation-input');
const validValue = Number(input.dataset.length);

function validationInput() {
  if (input.value.length >= validValue) {
    input.classList.add('valid');
  } else {
    input.classList.add('invalid');
  }
}
function focusInput() {
  input.classList.remove('valid');
  input.classList.remove('invalid');
}
input.addEventListener('blur', validationInput);
input.addEventListener('focus', focusInput);
