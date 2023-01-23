// Tuples
// To decide the type and the order of the array
let tUser: [string, number, boolean]

tUser = ['bushrha', 3245, true]
// but you can't do it like 
// tUser = [345, true, 'bushra'] because we declared the type of the value and the order of the array


// Better example, rgb colors must be in order of the colors and you don't want anyone to mess with it by mistake
let rgb: [number, number, number] = [255, 123, 112]
// and no one can add like [255, 255, 255, 0.3]

// Enum
enum SeatChoice {
    AISLE,
    MIDDLE,
    WINDOW,
    FORTH
}

const hcSeat = SeatChoice.AISLE