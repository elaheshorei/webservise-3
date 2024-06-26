document.getElementById('getRecipeBtn').addEventListener('click', getRandomRecipe);

function getRandomRecipe() {
    const randomRecipeId = Math.floor(Math.random() * 100) + 1;
    const url = `https://dummyjson.com/recipes/${randomRecipeId}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayRecipe(data);
        })
        .catch(error => console.error('Error fetching recipe:', error));
}

function displayRecipe(recipe) {
    const recipeContainer = document.getElementById('recipeContainer');

    const recipeCard = document.createElement('div');
    recipeCard.classList.add('recipe-card');

    const recipeTitle = document.createElement('h2');
    recipeTitle.classList.add('recipe-title');
    recipeTitle.textContent = recipe.name;

    const recipeImage = document.createElement('img');
    recipeImage.classList.add('recipe-image');
    recipeImage.src = recipe.image;
    recipeImage.alt = recipe.name;

    const recipeDescription = document.createElement('p');
    recipeDescription.textContent = recipe.description;

    const recipeDetails = document.createElement('div');
    recipeDetails.classList.add('recipe-details');

    const difficulty = document.createElement('p');
    difficulty.innerHTML = `<strong>Difficulty:</strong> ${recipe.difficulty}`;

    const cuisine = document.createElement('p');
    cuisine.innerHTML = `<strong>Cuisine:</strong> ${recipe.cuisine}`;

    const prepTime = document.createElement('p');
    prepTime.innerHTML = `<strong>Prep Time:</strong> ${recipe.prepTimeMinutes} minutes`;

    const cookTime = document.createElement('p');
    cookTime.innerHTML = `<strong>Cook Time:</strong> ${recipe.cookTimeMinutes} minutes`;

    const servings = document.createElement('p');
    servings.innerHTML = `<strong>Servings:</strong> ${recipe.servings}`;

    const calories = document.createElement('p');
    calories.innerHTML = `<strong>Calories per Serving:</strong> ${recipe.caloriesPerServing}`;

    const ingredientsTitle = document.createElement('h3');
    ingredientsTitle.textContent = 'Ingredients';

    const ingredientsList = document.createElement('ul');
    ingredientsList.classList.add('ingredients-list');
    recipe.ingredients.forEach(ingredient => {
        const li = document.createElement('li');
        li.textContent = ingredient;
        ingredientsList.appendChild(li);
    });

    const instructionsTitle = document.createElement('h3');
    instructionsTitle.textContent = 'Instructions';

    const instructionsList = document.createElement('ol');
    instructionsList.classList.add('instructions-list');
    recipe.instructions.forEach(instruction => {
        const li = document.createElement('li');
        li.textContent = instruction;
        instructionsList.appendChild(li);
    });

    recipeDetails.appendChild(difficulty);
    recipeDetails.appendChild(cuisine);
    recipeDetails.appendChild(prepTime);
    recipeDetails.appendChild(cookTime);
    recipeDetails.appendChild(servings);
    recipeDetails.appendChild(calories);

    recipeCard.appendChild(recipeTitle);
    recipeCard.appendChild(recipeImage);
    recipeCard.appendChild(recipeDescription);
    recipeCard.appendChild(recipeDetails);
    recipeCard.appendChild(ingredientsTitle);
    recipeCard.appendChild(ingredientsList);
    recipeCard.appendChild(instructionsTitle);
    recipeCard.appendChild(instructionsList);

    recipeContainer.innerHTML = '';
    recipeContainer.appendChild(recipeCard);
}
