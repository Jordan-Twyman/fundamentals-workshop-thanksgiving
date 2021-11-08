import { GuestsList } from "./PartyList.js"
import { saveGuests } from "./PartyProvider.js"

const contentTarget = document.querySelector(".guests-form")

document.querySelector("body").addEventListener("click", clickEvent => {
 if (clickEvent.target.id === "saveGuest") {

    let guestHanded = document.querySelector('#guest-handed').value === "true"

    let guestAge = document.querySelector('#guest-age')[whole_number].value

    const newGuest = {
        name: document.querySelector("#guest-name").value,
        image: document.querySelector("#guest-image").value,
        age: guestAge,
        favFood: document.querySelector("#guest-food").value,
        rightHanded: guestHanded
    }
    console.log (newGuest)

    saveGuests(newGuest)
    .then(GuestsList)

    
    document.querySelector("#guest-name").value=""
    document.querySelector("#guest-image").value=""
    document.querySelector("#guest-age").value=""
    document.querySelector("#guest-food").value=""
    document.querySelector("#guest-handed").value=""


 }   
})

export const GuestsForm = () => {
    contentTarget.innerHTML = `
    <section class="guests-form>
    <h2 class="form-heading"> Guests List</h2>
    <div>
    <label for="selfie">Please upload a headshot...</label>
    </div>
    <input type="file"
       id="guest-image" name="avatar"
       accept="image/png, image/jpeg">
    <div>
    <label for="guestName"> First and Last Name...</label>
    </div>
    <input type="text" id="guest-name" name="journalConcepts" id="concept-text" />
    <div>
    <label for="guestage"> Age...</label>
    </div>
    <input type="text" id="guest-age" name="journalConcepts" id="concept-text" />
    <div>
    <label for="guestfood">  Your favorite Thanksgiving dish...</label>
    </div>
    <input type="text" id="guest-food" name="journalConcepts" id="concept-text" />
    <div>
    <label for="guesthanded">Are you right handed...</label>
    </div>
<div>
  <input type="radio" id="guest-handed" name="drone" value="true"
         checked>
  <label for="false">Yes</label>
</div>

<div>
  <input type="radio" id="guest-handed" name="drone" value="true" >
  <label for="false">No</label>
</div>
<div>
    <button type="button" class="guest-button" id="saveGuest">
Confirm Reservation  
</button>
</div>
    </section>
    `
}