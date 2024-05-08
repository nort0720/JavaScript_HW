// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

let users = [
    {name: "Jonh", age: 31, status: true, id:1},
    {name: "Megan", age: 29, status: false, id:2},
    {name: "Melania", age: 28, status: true, id:3},
    {name: "Evelyn", age: 30, status: true, id:4},
    {name: "Leo", age: 27, status: false, id:5},
    {name: "Jasmine", age: 24, status: true, id:6},
    {name: "Lucas", age: 42, status: true, id:7},
    {name: "Scarlett", age: 41, status: true, id:8},
    {name: "Aiden", age: 32, status: false, id:9},
    {name: "Isabella", age: 35, status: true, id:10}
];

for (let i = 0; i < users.length; i++) {
    document.write (`<div>Lorem Ipsum</div>`)
}