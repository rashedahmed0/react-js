let arr = [1, 2, 3];
let arr2 = [...arr, 4, 5];
console.log(arr, arr2);
let myself = {
    name: 'rial',
    age: 25
}
let myself2 = { ...myself, isStudent: true };
console.log(myself2, myself);