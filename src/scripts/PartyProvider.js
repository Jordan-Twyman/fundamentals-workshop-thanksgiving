
let list = []


export const useGuests = () => {
    return list.slice();
   
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

 