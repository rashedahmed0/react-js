let person = {
    name: 'rial',
    age: 25,
    isStudent: true,
    address: {
        city: 'dhaka',
        area: 'dhanmondi'
    }
};
person.name = 'rashed'
person.hobby = 'reading books'
delete person.age
console.log(person);
console.log(person.name);
console.log(person['age']);
let isStudent = 'isStudent';
console.log(person[isStudent]);

for (let key in person) {
    // console.log(key, person[key]);
}

let keys = Object.keys(person);
keys.forEach((key) => {
    console.log(` ${key}: ${person[key]}`);
})
let values = Object.values(person);
values.forEach((value) => {
    console.log(value);
})
// console.log(keys, value);



