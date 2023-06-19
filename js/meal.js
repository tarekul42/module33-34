const loadMeals = (searchText) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
    .then(res => res.json())
    .then(data => displayMeals(data.meals))
}


const displayMeals = meals =>{
    // console.log(meals);
    const mealContainer = document.getElementById('meals-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        // console.log(meal);

        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strArea}</h5>
                 <!-- <p class="card-text">${meal.strInstructions}</p> -->
                <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <button onclick="loadMealDetail(${meal.idMeal})" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetails">
                    Details 
                </button>
            </div>
        </div>
        `
        mealContainer.appendChild(mealDiv);
    });
}
const searchMeals = () =>{
    const searchText = document.getElementById('search-field').value;
    // console.log(searchText);
    loadMeals(searchText)
}

const loadMealDetail = idMeal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayMealDetails(data.meals[0]))
    .catch(error =>{
        console.log(error);
    })
}
const loadMealDetail2 = async(idMeal) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
    try{
        const res = await fetch(url);
        const data = await res.json();
        displayMealDetails(data.meals[0])
    }
    catch(error){
        console.log(error);
    }
}

const displayMealDetails = meals =>{
    // console.log(meals);
    document.getElementById('mealDetailsLabel').innerText = meals.strMeal;
    const mealsDetails = document.getElementById('mealDetailsBody');
    mealsDetails.innerHTML = `
    <img class="img-fluid" src="${meals.strMealThumb}" alt="">
    <p>${meals.strInstructions}</p>
    `

}


loadMeals('rice');