import { GuestsList } from "./PartyList.js"
import { saveGuests } from "./PartyProvider.js"
import { FoodSelect } from "../food/FoodSelect.js"


const contentTarget = document.querySelector(".guests-form")

document.querySelector(".guests-form").addEventListener("click", clickEvent => {
 if (clickEvent.target.id === "saveGuest"){ 
//  console.log('hello world')
 


    

    const newGuest = {
        name: document.querySelector("#guest-name").value,
        image: Array.from(document.querySelectorAll('#guest-image')).map(gi => gi.value),
        age: +document.querySelector('#guest-age').value,
        rightHanded: document.querySelector('#guest-handed').checked,
        favFood: document.querySelector('#guest-food').selectedOption[0].value
    }
    console.log (newGuest)

    saveGuests(newGuest)
    .then(GuestsList)

    
    document.querySelector("#guest-name").value=""
    document.querySelector("#guest-image").value = '<input id="guest_image-url-1" class="guest_image" type="text"><br>';
    document.querySelector("#guest-age").value=""
    document.querySelector("#guest-food").value=""
    document.querySelector("#guest-handed").checked = false


 }   
})

export const GuestsForm = () => {
    contentTarget.innerHTML += `
    <section id="guests-reservation>
    <h1 class="form-heading"> Thanksgiving Reservation </h1>
    <div>
    <label for="selfie">Please upload a headshot...</label>
    </div>
    <input type="text"
       id="guest-image" name="avatar">
    <div>
    <label for="guestName"> First and Last Name...</label>
    </div>
    <input type="text" id="guest-name" name="journalConcepts" id="concept-text" />
    <div>
    <label for="guestage"> Age...</label>
    </div>
    <input type="number" id="guest-age" name="journalConcepts" id="concept-text" />
    <div  id="guest-food" class="guests-food-filter">
    </div>
    <div>
    <label for="guesthanded">Are you righthanded?</label>
    </div>
    <input type="checkbox" id="guest-handed" name="drone" value="true"
         unchecked>

         <br><label>Favorite Dish:</label><br>
         <div id="foodSelect"></div>

<div>
    <button type="button" class="guest-button" id="saveGuest">
Add Guest  
</button>
</div>
    </section>
    `
}


