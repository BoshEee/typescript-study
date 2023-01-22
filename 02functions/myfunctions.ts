function addTwo(num: number){
    return num + 2
}

function getUpper(val: string){
    return val.toUpperCase()
}
// So no one can call the function like this addTwo("hi")
addTwo(5)
// So no one can call the function like this getUpper(7)
getUpper('blue')


// This is why to not use ANY as a data type when declaring a variable 
// this is a function to get user data like name,email and password, If the variables were as ANY we can sing up user with (1,2,3) values which is not acceptable 
// in these cases, typing what the data type of each variable is important
function signUpUser(name: string, email: string, password: string, isPaid: boolean) {

}
// you can declare a default value for a param by = value after it like so ...
let loginUser = (name: string, isPaid: boolean = false) => {}

loginUser("blue")


// How to give the function return a type
// After setting the params of the function, type :type after the ()
const getHello = (s: string): string => {
    return s
}

// Best practice for the function that turns nothing is to give the function a type: void
function consoleError(errmsg: string): void {
    console.log(errmsg)
}

// To handle a function that throw an error, use the type NEVER
// the never type represents values which are never observed. The function here throws an exception
// or terminates execution of the program
function handleError(errmsg: string): never{
    throw new Error(errmsg)
}

export{}