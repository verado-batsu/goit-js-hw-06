const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientListEl = document.querySelector("#ingredients");

const arrayOfItemIngridients = [];


ingredients.map(ingredient => {
	// 1. 
	const itemOfIngridients = document.createElement('li');
	// 2.
	itemOfIngridients.textContent = ingredient;
	// 3. 
	itemOfIngridients.classList.add("item");

	arrayOfItemIngridients.push(itemOfIngridients);
})

// 4.
ingredientListEl.append(...arrayOfItemIngridients);