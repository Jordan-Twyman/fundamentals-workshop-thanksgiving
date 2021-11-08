import { Guest } from "./Party.js";

let list = []


export const useGuests = () => {
    return list.slice();
    const sortByDate = list.sort(
        (currentGuest, nextGuest) =>
    Date.parse(currentGuest.date) - Date.parse(nextGuest,date)
    )
    return sortByDate
}

export const getGuests = ()  => {
    return fetch ("http://localhost:8088/guests")
    .then(response => response.json())
    .then(guest => {
        list = guest
    })
}

export const saveGuests = guest => {
    return fetch ("http://localhost:8088/guests" , {
        method: "POST" ,
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(guest), 
    })
    .then(getGuests)
}

 