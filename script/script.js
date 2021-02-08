const onclickWithBtn = () => {
    const catchInput = document.getElementById('search-input').value;
    if (catchInput === "") {
        alert('Please write something then click Search')
    } else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${catchInput}`
        fetch(url)
            .then(res => res.json())
            .then(data => ShowOnDisplay(data.meals));
        document.getElementById('search-input').value = "";
    }
}

const ShowOnDisplay = meals => {
    const searchMeal = document.getElementById('search-meal');
    searchMeal.innerHTML = "";
    const ingredientHide = document.getElementById('ingredient-wrapper');
    ingredientHide.innerHTML = "";
    meals.forEach(meal => {
        const singleMeal = document.createElement('div');
        singleMeal.className = 'single-meal';
        const mealInfo = `
    <div class="singles" onclick="ingredient('${meal.strMeal}')">
        <img src ="${meal.strMealThumb}">
        <h2>${meal.strMeal}</h2>
    </div>
    `
        singleMeal.innerHTML = mealInfo;
        searchMeal.appendChild(singleMeal);
    });
}

const ingredient = mealList => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealList}`
    fetch(url)
        .then(res => res.json())
        .then(data => ingredientDetail(data.meals[0]));
}
const ingredientDetail = meals => {
    const ingredientWrapper = document.getElementById('ingredient-wrapper');
    ingredientWrapper.innerHTML = `
    <img src = "${meals.strMealThumb}">
        <h2 class="unique">${meals.strMeal}</h2>
        <h5>Ingredient</h5>
        <div class="list">
            <p>${meals.strIngredient1}</p>
            <p>${meals.strIngredient2}</p>
            <p>${meals.strIngredient3}</p>
            <p>${meals.strIngredient4}</p>
            <p>${meals.strIngredient5}</p>
            <p>${meals.strIngredient6}</p>
            <p>${meals.strIngredient7}</p>
            <p>${meals.strIngredient8}</p>
            <p>${meals.strIngredient9}</p>
            <p>${meals.strIngredient10}</p>
        </div>
    `
}