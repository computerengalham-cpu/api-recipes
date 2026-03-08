let row = document.querySelector("#row")
let searchInput = document.querySelector("#searchInput")
let mealSelect = document.querySelector("#mealSelect")

async function callApi(meal){

let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=${meal}`)

let data = await response.json()

let recipes = data.recipes

let cartona = ""

for(let i = 0; i < recipes.length; i++){

cartona += `
<div class="col-md-4">

<img src="${recipes[i].image_url}" class="recipe-img">

<p><b>Title:</b> ${recipes[i].title}</p>

<p><b>Recipe Id:</b> ${recipes[i].recipe_id}</p>

<p><b>publisher:</b> ${recipes[i].publisher}</p>

<p><b>Social Rank:</b> ${recipes[i].social_rank}</p>

</div>
`
}

row.innerHTML = cartona

}

callApi("pizza")


searchInput.addEventListener("keyup", function(){

callApi(searchInput.value)

})


mealSelect.addEventListener("change", function(){

callApi(mealSelect.value)

})