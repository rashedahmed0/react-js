let me = {
    name: 'rial',
    age: 24,
    isStudent: true
};

let JsonMe = JSON.stringify(me);
console.log(me);
console.log(JsonMe);
let ObjectMe = JSON.parse(JsonMe)
console.log(ObjectMe);

// fetch
// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(data => data.forEach(d => console.log(d.name)))




const products = [
    {
        id: 1, name: "Galaxy S23 Ultra", brand: "Samsung", model: "SM-S918B", category: "mobile", price: 1199.99, color: "Phantom Black", inStock: true
    },
    {
        id: 2, name: "MacBook Pro 16-inch", brand: "Apple", model: "M2 Pro", category: "laptop", price: 2499.00, color: "Space Gray", inStock: true
    },
    {
        id: 3,
        name: "Apple Watch Series 8",
        brand: "Apple",
        model: "A2770",
        category: "watch",
        price: 399.00,
        color: "Midnight",
        inStock: false
    },
    {
        id: 4,
        name: "Ray-Ban Wayfarer",
        brand: "Ray-Ban",
        model: "RB2140",
        category: "sunglass",
        price: 153.00,
        color: "Black/Gold",
        inStock: true
    },
    {
        id: 5,
        name: "Pixel 7 Pro",
        brand: "Google",
        model: "GA03447-US",
        category: "mobile",
        price: 899.00,
        color: "Snow",
        inStock: true
    },
    {
        id: 6,
        name: "XPS 15",
        brand: "Dell",
        model: "XPS15-9520",
        category: "laptop",
        price: 1899.99,
        color: "Platinum Silver",
        inStock: true
    },
    {
        id: 7,
        name: "Galaxy Watch 5",
        brand: "Samsung",
        model: "SM-R900",
        category: "watch",
        price: 279.99,
        color: "Graphite",
        inStock: false
    },
    {
        id: 8,
        name: "Aviator Classic",
        brand: "Ray-Ban",
        model: "RB3025",
        category: "sunglass",
        price: 175.00,
        color: "Gold/Green",
        inStock: true
    }
];
// products.forEach(p => console.log(p))
let newArrayWithoutPhone = products.filter((product) => product.category !== 'mobile');
console.log(newArrayWithoutPhone);