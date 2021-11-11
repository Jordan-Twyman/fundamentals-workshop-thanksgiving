
import { GuestsList } from "./party/PartyList.js";

export const PartySearch = () => {
  return `<input type="search" placeholder="Search for a guest...">`;
}

document.getElementById('guest-search').addEventListener('search', event => {
  GuestsList('name', event.target.value);
});