// To identify a type for an array, there is two ways
const superHeros: string[] = []
const superPower: Array<number> = []

// To pass multi types to an array we can create a type for the values like this
type User = {
    name: string
    isActive: boolean
}

const allUsers: User[] = []

export {}