let fruits = ['mango', 'lichi', 'pinaple', 'apple '];
//array loop for in 

for (let fruit of fruits) {
    console.log(fruit);
}
let ages = [25, 28, 30, 35, 51, 68];
console.log(ages);
// array modifying 

let length = ages.length;
console.log(length);
let firstElement = ages[0];
console.log(firstElement);
let index35 = ages.indexOf(35);
console.log(index35);
ages[ages.length - 1] = 100;
console.log(ages);
ages.pop();
console.log(ages);
ages.push(68);
console.log(ages);
//array loop

for (let i = 0; i < ages.length; i++) {
    console.log(ages[i]);
}

// array method 
let forAges = ages.forEach((age) => console.log(age));
let mapAges = ages.map((age) => age + 1);
console.log(mapAges);
let filterAge = ages.filter((age) => age % 2 === 0);
console.log(filterAge);

// Spread operator
let newArray = [...ages, ...fruits];
console.log(newArray);

// Destructuring
let flower = ['rose', 'bely ', 'lily'];
let [first, second] = flower;
console.log(flower, first, second);