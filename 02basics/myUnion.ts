// If there is variable that might be a number or a string 
let score: number | string = 33

score = 44
score = "55"

// this is also work on the type we create
// Here is an example if there is a user that might be an admin someday

type User = {
    name: string
    id: number
}

type Admin = {
    username: string
    id: number
}

let bushra: User | Admin = {name: "bushra", id: 3245}
// if we remove | Admin, typescript with return an error if we tried to add a username to user that is not also admin
bushra = {username: "boshe", id: 3245}

// Functions that accepts or | and returns multiple value type
function getDbId(id: number | string){
    console.log('this will make a problem')
}

// this function is fine until we decide to use id in some cases
// let's say we want to make the id to upper case, typescript will return an error so we can fix this by checking the type first inside the function
function getSmthId(id: number | string){
    if (typeof id === "string") {
        id.toLowerCase()
    }
}

// Using this with array
// COMMON MISTAKE 
const data: string[] | number[] = [] // this means that the array might be ONLY numbers or ONLY strings

// The right way
const data2: (string | number)[] = ["1",2]

// Assigning a value that never changes
// static values 
let seatAllotment: "aisle" | 'middle' | 'window' // these values can't change in the code later