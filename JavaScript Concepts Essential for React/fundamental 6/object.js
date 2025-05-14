let myself = {
    firstName: 'rial',
    lastName: 'ahmed',
    age: 25,
    isStudent: true,
    address: {
        city: 'dhaka',
        area: 'dhanmondi',
        ln: 'commisionar ln ',
        home: 314
    }

}
console.log(myself.firstName);
console.log(myself['lastName']);
let age = 'age';
console.log(myself[age]);
myself.fullName = 'rial ahmed'

myself.age = 26;
console.log(myself);

for (self in myself) {
    console.log(self, myself[self]);
}
let key = Object.keys(myself);
let value = Object.values(myself);
console.log(key);
console.log(value);

let { firstName, lastName, isStudent } = myself;
console.log(firstName, lastName, isStudent);