console.log('#whXxOBlYS0H')
console.log('– взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти.')
console.log('Інгредієнти повинні бути списком під час відображення.')

const div_recipes = document.getElementById('div_recipes');

fetch('https://dummyjson.com/recipes')
    .then(res => res.json())
    .then(recipesObject => {
        const {recipes} = recipesObject;

        for (const recipe of recipes) {

            const div_recipe = document.createElement('div_recipe')
            div_recipe.classList.add('div_recipe')
            div_recipes.appendChild(div_recipe)

            const div_recipe_main_info = document.createElement('div_recipe_main_info')
            div_recipe_main_info.classList.add('div_recipe_main_info')
            div_recipe.appendChild(div_recipe_main_info)

            const button_show_details = document.createElement('button')
            button_show_details.classList.add('button_show_details')
            button_show_details.innerText = '+'
            div_recipe_main_info.appendChild(button_show_details)

            let p_recipe_name = document.createElement('p')
            p_recipe_name.classList.add('p_recipe_name')
            p_recipe_name.innerText = recipe.id + '. ' +  recipe.name
            div_recipe_main_info.appendChild(p_recipe_name)

            button_show_details.onclick = function(){

                const div_recipe_details = document.createElement('div')
                div_recipe_details.classList.add('div_recipe_details')

                if(button_show_details.innerText === '-'){
                    button_show_details.innerText='+'
                    div_recipe.innerHTML=''
                    div_recipe.appendChild(div_recipe_main_info)
                }else{
                    button_show_details.innerText='-'
                    const ol_ingredients = document.createElement('ol')
                    ol_ingredients.classList.add('ol_ingredients')
                    div_recipe_details.appendChild(ol_ingredients)
                    ol_ingredients.innerText = 'ingredients:'
                    const arr_ingredients = recipe.ingredients
                    for (const ingredient of arr_ingredients) {
                        const li_ingredient = document.createElement('li')
                        li_ingredient.classList.add('li_ingredient')
                        li_ingredient.innerText = ingredient
                        ol_ingredients.appendChild(li_ingredient)
                    }

                    const ul_instructions = document.createElement('ul')
                    ul_instructions.classList.add('ul_instructions')
                    div_recipe_details.appendChild(ul_instructions)
                    ul_instructions.innerText = 'instructions:'
                    const arr_instructions = recipe.instructions
                    for (const instruction of arr_instructions) {
                        const li_instruction = document.createElement('li')
                        li_instruction.classList.add('li_ingredient')
                        li_instruction.innerText = instruction
                        ul_instructions.appendChild(li_instruction)
                    }

                    const div_recipe_other_info = document.createElement('div')
                    div_recipe_other_info.classList.add('div_recipe_other_info')
                    div_recipe_details.appendChild(div_recipe_other_info)
                    div_recipe_other_info.innerText = 'other info:'

                    let p_prepTimeMinutes = document.createElement('p')
                    let p_cookTimeMinutes = document.createElement('p')
                    let p_servings = document.createElement('p')
                    let p_difficulty = document.createElement('p')
                    let p_cuisine = document.createElement('p')
                    let p_caloriesPerServing = document.createElement('p')
                    let p_rating = document.createElement('p')
                    let p_reviewCount = document.createElement('p')

                    p_prepTimeMinutes.innerText = 'prepTimeMinutes: ' + recipe.prepTimeMinutes
                    p_cookTimeMinutes.innerText = 'cookTimeMinutes: ' + recipe.cookTimeMinutes
                    p_servings.innerText = 'servings: ' + recipe.servings
                    p_difficulty.innerText = 'difficulty: ' + recipe.difficulty
                    p_cuisine.innerText = 'cuisine: ' + recipe.cuisine
                    p_caloriesPerServing.innerText = 'caloriesPerServing: ' + recipe.caloriesPerServing
                    p_rating.innerText = 'rating: ' + recipe.rating
                    p_reviewCount.innerText = 'reviewCount: ' + recipe.reviewCount

                    div_recipe_other_info.append(
                        p_prepTimeMinutes,
                        p_cookTimeMinutes,
                        p_servings,
                        p_difficulty,
                        p_cuisine,
                        p_caloriesPerServing,
                        p_rating,
                        p_reviewCount
                    )

                    const img_recipe = document.createElement('img');
                    img_recipe.classList.add('img_recipe')
                    img_recipe.src = recipe.image;
                    div_recipe_details.appendChild(img_recipe)
                }

                div_recipe.appendChild(div_recipe_details)

            }
        }

    });