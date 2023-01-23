// If there is variable that might be a number or a string 
var score = 33;
score = 44;
score = "55";
var bushra = { name: "bushra", id: 3245 };
// if we remove | Admin, typescript with return an error if we tried to add a username to user that is not also admin
bushra = { username: "boshe", id: 3245 };
// Functions that accepts or | and returns multiple value type
function getDbId(id) {
    console.log('this will make a problem');
}
// this function is fine until we decide to use id in some cases
// let's say we want to make the id to upper case, typescript will return an error so we can fix this by checking the type first inside the function
function getSmthId(id) {
    if (typeof id === "string") {
        id.toLowerCase();
    }
}
// Using this with array
// COMMON MISTAKE 
var data = []; // this means that the array might be ONLY numbers or ONLY strings
// The right way
var data2 = ["1", 2];
// Assigning a value that never changes
// static values 
var seatAllotment; // these values can't change in the code later
