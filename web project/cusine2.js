// script.js
document.getElementById('search-button').addEventListener('click', () => {
    const query = document.getElementById('search-input').value;
    getCuisineRecommendations(query);
  });
  
  async function getCuisineRecommendations(query) {
    const recommendationsDiv = document.getElementById('recommendations');
    recommendationsDiv.innerHTML = 'Loading...';
  
    const simulatedCuisines = await simulateCuisineData(query);
  
    recommendationsDiv.innerHTML = '';
  
    if (simulatedCuisines.length === 0) {
      recommendationsDiv.innerHTML = '<p>No cuisines found.</p>';
      return;
    }
  
    simulatedCuisines.forEach(cuisine => {
      const cuisineCard = document.createElement('div');
      cuisineCard.className = 'cuisine-card';
      cuisineCard.innerHTML = `
        <img src="${cuisine.image}" alt="${cuisine.name}">
        <h3>${cuisine.name}</h3>
        <p>${cuisine.description}</p>
        <button class="view-cuisine" data-cuisine='${JSON.stringify(cuisine)}'>View Recipes</button>
      `;
      recommendationsDiv.appendChild(cuisineCard);
    });
  
    document.querySelectorAll('.view-cuisine').forEach(button => {
      button.addEventListener('click', (e) => {
        const cuisine = JSON.parse(e.target.dataset.cuisine);
        showCuisineDetails(cuisine);
      });
    });
  }
  
  async function simulateCuisineData(query) {
    return new Promise(resolve => {
      setTimeout(() => {
        const cuisines = [
          {
            name: 'Italian',
            description: 'When it comes to comfort food, Italian dishes reign supreme. Filled with tomato-based sauces, creamy cheese, and pastas galore, its no wonder why so many people love this cuisine!The array of Italian dishes such as lasagna, cannelloni, pizza Margherita, spaghetti bolognese and risotto are truly incredible and offer a world of flavour. Perfectly balancing intense flavours with fresh ingredients, each dish is a culinary masterpiece that has been perfected over centuries.',
            image: 'italian.jpg',
            recipes: [
              { name: 'Braciole', image: 'braciole.jpg' },
              { name: 'Spaghatti', image: 'spaghetti.jpg' }
            ]
          },
          {
            name: 'Indian',
            description: 'Indian cuisine consists of a variety of regional and traditional cuisines native to the Indian subcontinent. Given the diversity in soil, climate, culture, ethnic groups, and occupations, these cuisines vary substantially and use locally available spices, herbs, vegetables, and fruits.',
            image: 'indian.jpg',
            recipes: [
              { name: 'Good Bowl', image: 'good.jpg' },
              { name: 'Biryani', image: 'biryani.jpg' }
            ]
          },
          {
            name: 'Mexico',
            description: 'Mexican dishes are known for their bold and spicy flavors, colorful presentation, and the use of fresh ingredients such as avocado, tomatoes, chilies, and corn. Traditional Mexican flavors like mole, adobo, and salsa add an extra layer of complexity and depth to the dishes.',
            image: 'mexico.jpg',
            recipes: [
              { name: 'Mexican Mole pie', image: 'molepie.jpg' },
              { name: 'Spicy Taco', image: 'taco.jpg' }
            ]
          },
          {
            name: 'Japanese',
            description: 'And now for a trip to the Far East. Japanese cuisine is one of the worlds most popular and beloved cuisines. With a focus on freshness, simplicity, and balance, Japanese dishes offer an exciting and flavourful experience.Popular Japanese dishes include not just the ever-so-popular sushi but also ramen, tempura, tonkatsu, miso soup, and teriyaki. Japanese cuisine is truly a unique culinary experience, offering an array of flavours and textures that are complex and harmoniously balanced, giving everyone something to enjoy!',
            image: 'japan.jpg',
            recipes: [
              { name: 'Tempura', image: 'tempura.jpg' },
              { name: 'Biryani', image: 'biryani.jpg' }
            ]
          },
          {
            name: 'Thai Cuisine',
            description: 'Out of all the types of cuisine in the world, Thai cuisine is probably one of the most exciting. This cuisine is well-renowned for balancing the five fundamental flavours: sweet, sour, salty, bitter and spicy. Dishes are often flavoured with herbs like lemongrass, galangal, kaffir lime leaves, coriander and chillies for added flavour and kick.Popular dishes include pad thai noodles, tom Kha soup, green curry, and mango sticky rice. Each of these dishes takes conventional flavours and turns them around, making for an unforgettable meal.',
            image: 'thai.jpg',
            recipes: [
              { name: 'Vegetarian Pad', image: 'vegetarian.jpg' },
              { name: 'Thai Cusine', image: 'thaicuisine.jpg' }
            ]
          },
          {
            name: 'French',
            description: 'Finally, lets take a journey to France and discover the renowned French cuisine - most popular for its rich cheeses and aromatic sauces. Experience sheer indulgence with every bite as you delve into the exquisite culinary delights of this remarkable country.Classic dishes like ratatouille, bouillabaisse, onion soup and steak tartare are most often associated with French cuisine. Of course, no French meal would be complete without a decadent dessert like crème brûlée or an assortment of gorgeous and sweet pastries and macarons.',
            image: 'french.jpg',
            recipes: [
              { name: 'Ratatoulli', image: 'ratatoul.jpg' },
              { name: 'Pot-au-Feu', image: 'pot.jpg' }
            ]
          },
        ];
  
        const filteredCuisines = cuisines.filter(cuisine => cuisine.name.toLowerCase().includes(query.toLowerCase()));
        resolve(filteredCuisines);
      }, 500);
    });
  }
  
  function showCuisineDetails(cuisine) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('cuisine-details').style.display = 'block';
  
    const cuisineContent = document.getElementById('cuisine-content');
    cuisineContent.innerHTML = `
      <h2>${cuisine.name} Recipes</h2>
      <p>${cuisine.description}</p>
      <select id="recipe-dropdown">
        ${cuisine.recipes.map((recipe, index) => `<option value="${index}">${recipe.name}</option>`).join('')}
      </select>
      <div id="recipe-details"></div>
      <a href="https://www.swiggy.com/search?query=Italian"><button id="place-order">Place Order</button></a>
    `;
  
    const recipeDropdown = document.getElementById('recipe-dropdown');
    const recipeDetails = document.getElementById('recipe-details');
  
    function updateRecipeDetails() {
      const selectedRecipe = cuisine.recipes[recipeDropdown.value];
      recipeDetails.innerHTML = `
        <h3>${selectedRecipe.name}</h3>
        <img src="${selectedRecipe.image}" alt="${selectedRecipe.name}">
      `;
    }
    updateRecipeDetails();
    recipeDropdown.addEventListener('change', updateRecipeDetails);
  
    document.getElementById('back-to-home').addEventListener('click', () => {
      document.getElementById('cuisine-details').style.display = 'none';
      document.getElementById('home').style.display = 'block';
    });
  }