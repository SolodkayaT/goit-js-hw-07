const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const elements = ingredients.map((elem) => {
  const li = document.createElement('li');
  li.textContent = elem;
  return li;
});
const menu = document.querySelector('#ingredients');
menu.append(...elements);
