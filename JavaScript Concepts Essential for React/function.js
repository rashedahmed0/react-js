function number(a, b) {
    let sum = a + b;
    return sum
}
let sumOf2Number = number(5, 6)
console.log(sumOf2Number);

let towSum = (c, d) => c + d;
let numbers = towSum(2, 3)
console.log(numbers);

function fullName(firstName, lastName) {
    return firstName + lastName;

}
let name = fullName('rashed ', 'ahmed');
console.log(name);

function maxNubmer(arr) {
    let max = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;

}
let ages = [23, 54, 76, 22, 32];
let age = maxNubmer(ages)
console.log(age);


function even(arr) {
    for (let element of arr) {
        if (element % 2 === 0) {
            console.log(element);
        }
    }
}
let nums = [2, 3, 4, 5, 6, 7];
even(nums)
