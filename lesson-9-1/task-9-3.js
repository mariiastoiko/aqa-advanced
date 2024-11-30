const car1 = {
    brand: 'Ford',
    model: 'Mustang',
    year: 1999
}
const car2 = {
    brand: 'Jeep',
    model: 'Compass',
    owner: 'Harry Potter'
}

const car3 = {
    ...car1, ...car2
}

console.log(car3)