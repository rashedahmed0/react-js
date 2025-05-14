function sum(a, b) {
    let sums = a + b;
    return sums
}
let number = sum(5, 2);
console.log(number);

let arr = [1, 2, 3, 4, 5];

let multi = (b, c) => b + c;
let number2 = multi(2, 8);
console.log(number2);

let arrforEach = arr.forEach((arry) => console.log(arry + 2));
let mapArr = arr.map((arry) => arry + 5);
console.log(mapArr);
let filterArr = arr.filter(arry => arry % 2 === 0);
console.log(filterArr);
