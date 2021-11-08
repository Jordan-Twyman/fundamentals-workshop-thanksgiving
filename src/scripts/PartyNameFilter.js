import { GuestsList } from "./PartyList";
import { getGuests, useGuests } from "./PartyProvider";

const filterNames = document.querySelector('.name-filer');
const contentTarget = document.querySelector("body");

export const filterGuests = () => {

    getGuests()
    .then(() => {
        const partyGuests = useGuests()
        render(partyGuests)
    })
}

eventHub.addEventListener("change", (eventObj) => {
    if (eventObj.target.id === "guestSelect") {
        const filterObject = {
            type: "Guests",
            filterValue: eventObj.target.value
        }
        GuestsList(filterObject)
    }
})
const render = dishCollection => {
filterNames.innerHTML = `
    
`
}