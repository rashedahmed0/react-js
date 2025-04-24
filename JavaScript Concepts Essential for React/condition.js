// operator 
// aritmatic operator + - / * ;
let num1 = 5;
let num2 = 2;
console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 / num2);
console.log(num1 * num2);

//  comarism operator  > < == === >= <= 

console.log(num1 > num2);
console.log(num1 >= num2);
console.log(num1 <= num2);
console.log(num1 < num2);
console.log(num1 == '5');
console.log(num1 === '5');

// short hand  += -= 

num1 += 5;
console.log(num1);
num1 -= 2;
console.log(num1);
num1 /= 2;
console.log(num1);
num1 *= 5;
console.log(num1);

//  logical operator & || ;

let number = -10;
if (number > 0) {
    console.log('this is positive number  ');
}
else if (number < 0) {
    console.log('this is negative number ');
}
else {
    console.log('this is zero ');
}

// odd even checker 

let checkOddEvenNumber = 5;
if (checkOddEvenNumber % 2 === 0) {
    console.log('this is even  number ');
}
else {
    console.log('this is odd number ');
}

let temp = 10;
if (temp < 10) {
    console.log('this is cool temp');
}
else if (temp > 25) {
    console.log('this is hot temp ');
}
else if (temp >= 10 && temp < 25) {
    console.log('this is the right temp ');
}

let username = "rial";
let password = "1234";

if (username === 'rial' && password === '1234') {
    console.log('correct user and password');
}
else {
    console.log('incorrect user and pass word ');
}