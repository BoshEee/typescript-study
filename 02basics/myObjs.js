"use strict";
exports.__esModule = true;
// In typescript we can declare a simple Object like this
var user = {
    name: 'Bushra',
    email: 'b@b.com',
    isActive: true
};
// This is how an Obj returns an Obj with a specific type of value
function createCourse() {
    return { name: 'reactjs', price: 399 };
}
// To pass an Obj as a param in a function
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
function createNewUser(user) {
    return { name: 'd', email: 'f', isActive: true };
}
