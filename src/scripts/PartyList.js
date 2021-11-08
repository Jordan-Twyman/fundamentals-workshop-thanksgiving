import { Guest } from "./Party.js";
import { getGuests, useGuests } from "./PartyProvider.js"


const contentTarget = document.querySelector(".guests-list")

export const GuestsList = () => {
    getGuests()
    .then(() => {
        let allGuests = useGuests();
        let listHTML = "";
        allGuests.forEach((singleGuest) => {
            listHTML += Guest(singleGuest);

        });

        contentTarget.innerHTML = `
        <h2>Guest List:</h2>
        ${listHTML}
        `
    });
};