import { GuestEditForm } from "./PartyEditForm.js"

export const Guest = (guest) => {
    return `
    <section class="guest-card">
    <h3 class="guest-name">${guest.name}</h3>
    <img class="guest-image src="${guest.image}" alt="A guest's selfie" width="500" height="600">
    <p class="guest-age">${guest.age}</p>
    <p class="guest-food">${guest.favFood}</p>
    <div class="guest-handed"
    ${guest.rightHanded ? `<p>right-handed</p>` : "left-handed"} </div>
    <button id="edit--${guest.id}">Edit</button>
    </section>
    `
}

const eventHub = document.querySelector(".guests-list")
eventHub.addEventListener("click", (eventObject) => {

    const guestId = +eventObject.target.id.split("--")[1]
    GuestEditForm(guestId);
})
