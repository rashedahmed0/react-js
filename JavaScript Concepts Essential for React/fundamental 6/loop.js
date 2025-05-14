for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let array = [1, 2, 3, 4, 5, 6, 7];
for (let arr of array) {
    console.log(arr);
}
let myself = {
    name: 'rial',
    age: 25,
    isStudent: true
}
for (let self in myself) {
    console.log(self, myself[self]);
}
console.log(myself);
console.log(myself.name);
console.log(myself['isStudent']);
let age = 'age'
console.log(myself[age]);

let fruits = ['mango ', 'lichi ', 'apple ', 'banana'];
fruits.forEach((fruit, index) => console.log(fruit, index))