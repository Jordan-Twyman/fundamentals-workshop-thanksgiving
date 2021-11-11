import { updateGuest, useGuests } from "./PartyProvider.js";
import { GuestsForm } from "./PartyForm.js";
import { GuestsList } from "./PartyList.js";

const contentTarget = document.querySelector(".guests-form")



    contentTarget.addEventListener("click", (event) => {
        if(event.target.id.startsWith("saveGuestChanges")){
    
    
            // Make a new object representation of a note
            const editedGuest = {
                id: event.target.id.split('-')[1], // how can you get the note's id?
                name: document.querySelector('#guest-name').value, // get value of text from input
                age: document.querySelector('#guest-age').value,
                favFood: document.querySelector('#guest-food').value,
                rightHanded: document.querySelector('#guest-handed').value, // get value of suspect from input,
                // date: document.querySelector('#guest-date').value // get value of date from input
            }
    
            document.querySelector('#guest-name').value = '';
            document.querySelector('#guest-age').value = '';
            document.querySelector('#guest-food').value = '';
            document.querySelector('#guest-handed').value = '';
            // Send to json-server and refresh the list
            updateGuest(editedGuest).then(GuestsList);
            GuestsForm();
    
        }
    })
      
    export const GuestEditForm = (guestId) => {
        // Give this component access to our application's notes state
        const allGuests = useGuests();
    
        // Find the note that we clicked on by its unique id
        const guestObject = allGuests.find(singleGuest=> singleGuest.id === parseInt(guestId))

    // Print the form
    // We'll use the HTML value attribute to pre-populate our form fields with the note's info
    contentTarget.innerHTML = `
        <h2>Edit Note</h2>
        <input type="text" value="${guestObject.name}" id="guest-name" />
        <input type="text" value="${guestObject.age}" id="guest-age" />
        <input type="text" value="${guestObject.favFood}" id="guest-food" />
        <input type="text" value="${guestObject.rightHanded}" id="guest-handed" />
        <button id="saveGuestChanges-${guestId}">Save Changes</button>
    `
}
