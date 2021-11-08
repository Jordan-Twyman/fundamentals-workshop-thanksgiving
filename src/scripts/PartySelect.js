import { Guest } from "./Party.js";
import { getGuests, useGuests } from "./PartyProvider.js";

const contentTarget = document.querySelector(".guests-food-filter");
const eventHub = document.querySelector("body");

export const GuestSelect = () => {
    contentTarget.innerHTML = `

    <select class="dropdown" id="foodSelect">
    <option value="0">Please select an dish...</option>
    <option value="mashed potatoes">mashed potatoes</option>
    <option value="stuffing">stuffing</option>
    <option value="greenbeans">greenbeans</option>
    <option value="cranberry sauce">cranberry sauce</option>
    <option value="turkey">turkey</option>

    </select>
    `

    document.querySelector('body').addEventListener("change", clickEvent => {
        if (clickEvent.target.id === "foodSelect") {
            eventHub.innerHTML = ""
            getGuests()
            .then(() => {
                let guests = useGuests();
                let guestListHTML = "";  
                guests.forEach((singleGuest) => {
                    if (singleGuest.favFood === document.querySelector('#foodSelect').value) {
                        guestListHTML += Guest(singleGuest); 
                        eventHub.innerHTML = 
                        `
                            ${guestListHTML}
                        `
                    }
                })
            })
        }
    })
}    



