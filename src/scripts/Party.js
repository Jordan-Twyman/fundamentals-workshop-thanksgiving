export const Guest = (guest) => {
    return `
    <section class="guest-card">
    <h3 class="guest-name">${guest.name}</h3>
    <img class="guest-image src="${guest.image}" alt="A guest's selfie" width="500" height="600">
    <p class="guest-age">${guest.age}</p>
    <p class="guest-handed">${guest.favFood}</p>
    ${guest.rightHanded ? `<p>right-handed</p>` : "left-handed"}
    </section>
    `
}