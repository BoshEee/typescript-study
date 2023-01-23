"use strict";
exports.__esModule = true;
function addTwo(num) {
    return num + 2;
}
function getUpper(val) {
    return val.toUpperCase();
}
// So no one can call the function like this addTwo("hi")
addTwo(5);
// So no one can call the function like this getUpper(7)
getUpper('blue');
// This is why to not use ANY as a data type when declaring a variable 
// this is a function to get user data like name,email and password, If the variables were as ANY we can sing up user with (1,2,3) values which is not acceptable 
// in these cases, typing what the data type of each variable is important
function signUpUser(name, email, password, isPaid) {
}
// you can declare a default value for a param by = value after it like so ...
var loginUser = function (name, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
loginUser("blue");
// How to give the function return a type
// After setting the params of the function, type :type after the ()
var getHello = function (s) {
    return s;
};
// Best practice for the function that turns nothing is to give the function a type: void
function consoleError(errmsg) {
    console.log(errmsg);
}
// To handle a function that throw an error, use the type NEVER
function handleError(errmsg) {
    throw new Error(errmsg);
}
