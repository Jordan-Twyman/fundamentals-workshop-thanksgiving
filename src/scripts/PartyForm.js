import { GuestsList } from "./PartyList.js"
import { saveGuests } from "./PartyProvider.js"
import { GuestSelect } from "./PartySelect.js"


const contentTarget = document.querySelector(".guests-form")

document.querySelector("body").addEventListener("click", clickEvent => {
 if (clickEvent.target.id === "saveGuest"){ 
//  console.log('hello world')
 


    

    const newGuest = {
        name: document.querySelector("#guest-name").value,
        image: document.querySelector("#guest-image").value,
        age: +document.querySelector('#guest-age').value,
        favFood: document.querySelector("#guest-food").value,
        rightHanded: document.querySelector('#guest-handed').checked 
    }
    console.log (newGuest)

    saveGuests(newGuest)
    .then(GuestsList)

    
    document.querySelector("#guest-name").value=""
    document.querySelector("#guest-image").value=""
    document.querySelector("#guest-age").value=""
    document.querySelector("#guest-food").value=""
    document.querySelector("#guest-handed").checked=false


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

         <section>

<select class="dropdown" id="foodSelect">
<option value="0" >Please select an dish...</option>
<option value="mashed potatoes" id="guest-food">mashed potatoes</option>
<option value="stuffing">stuffing</option>
<option value="greenbeans">greenbeans</option>
<option value="cranberry sauce">cranberry sauce</option>
<option value="turkey">turkey</option>

</select>

</section>
<div>
    <button type="button" class="guest-button" id="saveGuest">
Add Guest  
</button>
</div>
    </section>
    `
}


