const categories = document.querySelector('#categories');

const categoriesItems = document.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(categoriesItem => {
  const categoryName = categoriesItem.querySelector('h2');

  console.log(`Category: ${categoryName.textContent}`);

  const categoryElements = categoriesItem.querySelectorAll('li');

  console.log(`Elements: ${categoryElements.length}`);
});
