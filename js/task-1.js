const menu = document.querySelector('#categories');
const menuItems = menu.querySelectorAll('.item');

console.log(`В списке ${menuItems.length} категории.`);
[...menuItems].map((e) => console.log(
    `Категория: ${e.children[0].textContent}  \nКоличество элементов: ${e.children[1].childElementCount}`,
  ),);
