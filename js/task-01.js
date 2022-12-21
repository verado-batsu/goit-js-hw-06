// 1.

// const categoriesEl = document.querySelector("#categories");
// const numberOfCategoriesItem = categoriesEl.children.length;
// console.log(`Number of categories: ${numberOfCategoriesItem}`);

const childrenOfCategories = document.querySelectorAll("#categories > .item");
console.log(`Number of categories: ${childrenOfCategories.length}`);


// 2.

childrenOfCategories.forEach(itemEl => {
	const nameOfCategory = itemEl.firstElementChild.textContent;
	const numberOfElement = itemEl.lastElementChild.children.length;

	console.log(`Category: ${nameOfCategory}`);
	console.log(`Elements: ${numberOfElement}`);
});

