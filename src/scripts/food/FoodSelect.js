import { GuestsList } from "../party/PartyList.js";
import { getFoods } from "./FoodProvider.js";

const FoodOptions = food => {
  return food.map( dish => `<option value="${food.id}">${dish.name}</option>`);
}

export const FoodSelect = () => {
  
  getFoods().then(food => {
    // Render FoodSelect in the Form
    document.getElementById('foodSelect').innerHTML = render(food);

    // Render FoodSelect in the Filter Container
    document.getElementById('food-filter').innerHTML = render(food);
  });

}

const render = food => {
  return `
    <select id="favorite-dish">
      <option value="0">Select Favorite Dish</option>
      ${FoodOptions(food)}
    </select>
  `;
}

document.getElementById('food-filter').addEventListener('change', event => {
  if (event.target.id === 'favorite-dish') {
    GuestsList('food', event.target.selectedOptions[0].text);
  }
});