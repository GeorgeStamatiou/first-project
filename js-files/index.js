let foodHTML = '';
let foodListHTML = '';

const selectedFoodList = [];

/* So this was the closest I got by myself - asked chatGPT for help and it simply changed the order of the function.... I was on the right track at least just need to finesse how I do all this. Took me about an hour and a bit to get it right (struggled to do it without using a function but then realised its the best way)

function updateQuantityList() {
  foodListHTML = selectedFoodList;
  document.querySelector('.js-food-quantity-list').innerHTML = foodListHTML;
  selectedFoodList.forEach((item) => {
    foodListHTML += `<button>-</button><button>${item}</button><button>+</button> 20 Servings <br>`
  })
};
*/

function updateQuantityList() {
  foodListHTML = '';

  selectedFoodList.forEach((food, index) => {
    let quantity = '';
    foodListHTML += `
      ${index + 1}
      <button class="js-minus-food food-decrease-button">-</button>
      <button>${food}</button>
      <button class="js-plus-food food-increase-button">+</button> 
      ${quantity} Servings <br>`;
  });

  document.querySelector('.js-food-quantity-list').innerHTML = foodListHTML;



  document.querySelectorAll('.js-plus-food').forEach((addButton, index) => {
    addButton.addEventListener('click', () => {
      console.log(index + 1);
    })
  })




};

// In order to give event listeners to each button, we need to do that in places directly after this function is executed.

function generateSelectedFoodList() {

  foodHTML = '';
  foods.forEach((food) => {
    foodHTML += `
    <button class="js-${food.name} js-food-buttons food-buttons">${food.name}</button>`;

    // creating HTML in the variable foodHTML. This happens everytime a new buttons is added.

    document.querySelector('.js-food-list').innerHTML = foodHTML;

    // generating the button HTML above for foods that are currently in the list.

    document.querySelectorAll('.js-food-buttons')
      .forEach((foodButton) => {

        // Looping through each button generated

        if (selectedFoodList
          .includes(foodButton.innerHTML)) {

          foodButton.classList.add('food-button-selected');


          // Here, I'm checking if a button was previoously selected after a new button is added, the button is re-generated as selected.
        };

        foodButton.addEventListener('click', () => {

          if (!foodButton.classList.contains('food-button-selected')) {

            selectedFoodList.push(foodButton.innerHTML);
            // console.log(selectedFoodList);
            foodButton.classList.add('food-button-selected');
            updateQuantityList();

            // adding Event Listeners to add selected class to buttons and push them into selectedFoodList.

          } else {
            foodButton.classList.remove('food-button-selected');


            const index = selectedFoodList.indexOf(foodButton.innerHTML);

            if (index !== -1) {
              selectedFoodList
                .splice(index, 1);

              // if they are unselected, we remove them from selectedFoodList and remove selected class 

              updateQuantityList();

            };
          }
        });
      });
  });
};

generateSelectedFoodList();

const addFoodButtonElement = document.querySelector('.js-add-food-button');

addFoodButtonElement.addEventListener('click', () => {

  document.querySelector('.js-food-list').innerHTML += '<input type="text" placeholder="hit Enter when done" class="js-food-input" focus>';

  // creating an eventListener for the Add button to create a input field next to foods.

  document.querySelector('.js-food-input')
    .addEventListener('keydown', (event) => {
      if (event.key === "Enter") {

        // console.log(selectedFoodList);

        foods.push({ name: document.querySelector('.js-food-input').value });

        // we then add the input (on 'Enter') to the foodList. Would like it to be selected automatically, but this comes with changes:

        // I'd have to have a whole bunch of foods on a database, and then use a dropdown to autofill as they type. This way, we can auto-select the button, as we can generate a selected button and have whatever is typed to hook up to a database and give other information.

        generateSelectedFoodList();
      }
    });
});





























