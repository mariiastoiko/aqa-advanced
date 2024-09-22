const users = [{
    name: 'Ron'
},{
    lastName: 'Weasley'
},{
    age: 18
}]

for(user of users) {
    console.log(user)
}

for(const {name, lastName, age} of users) {
    console.log(name)
    console.log(lastName)
    console.log(age)
}