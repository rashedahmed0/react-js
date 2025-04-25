for (let i = 0; i <= 10; i++) {
    console.log('5 X ', i, ' = ', i + 5);
}
let sum = 0;
for (let i = 0; i <= 10; i++) {
    sum += i;

}
console.log(sum);

let fatorial = 1;
for (let i = 1; i <= 5; i++) {
    fatorial *= i;

}
console.log(fatorial);

let arr = [1, 2, 3, 4, 5];
let maxNumber = arr[0];
for (let i of arr) {
    let element = arr[i];
    if (element > maxNumber) {
        maxNumber = element;
    }

}
console.log('the max number is :', maxNumber);




for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    }
    else {
        // console.log(arr[i]);
    }
}
let even = arr.forEach((num) => console.log(num % 2 === 0));


let arrSum = 0;
for (let i = 0; i < arr.length; i++) {
    arrSum += arr[i];
}
console.log(arrSum);
arr.forEach((num) => arrSum += num);
console.log(arrSum);

