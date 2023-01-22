// In typescript we can declare a simple Object like this
const user = {
    name: 'Bushra',
    email: 'b@b.com',
    isActive: true
}

// This is how an Obj returns an Obj with a specific type of value
function createCourse():{name: string, price: number} {
    return {name: 'reactjs', price: 399}
}

// To pass an Obj as a param in a function
function createUser({name: string, isPaid: boolean}) {}

// Best practice to use Type Aliases
type User = {
    name: string;
    email: string;
    isActive: boolean
}

function createNewUser(user: User): User {
    return {name: 'd', email: 'f', isActive: true}
}

// ReadOnly
// if there is a value you don't want anyone or anything to change
// uf there is a param or a value in the type we creating that is optional, add ?
type NewUser = {
    readonly _id: string
    name: string
    email: string
    isActive: boolean
    cardDetails?: number
}

export{}