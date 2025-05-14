let products = [
    { name: 'phone', price: 5000, brand: 'iphone ', color: 'red' },
    { name: 'watch', price: 500, brand: 'casio ', color: 'black' },
    { name: 'sunglass', price: 80, brand: 'rayban ', color: 'white' },
    { name: 'laptop', price: 3000, brand: 'macbook ', color: 'blue' },
]

let brand = products.map((product) => product.brand);
// console.log(brand);
let name = products.map(product => product.name);
// console.log(name);
products.forEach(product => console.log(product.name));
let price = products.filter(product => product.price > 100);
console.log(price);
