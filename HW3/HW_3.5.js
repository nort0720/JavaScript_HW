// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

let users3 = [
    {name: "Jonh", age: 31, status: true, id:1},
    {name: "Megan", age: 29, status: false, id:2},
    {name: "Melania", age: 28, status: true, id:3},
    {name: "Evelyn", age: 30, status: true, id:4},
    {name: "Leo", age: 27, status: false, id:5},
    {name: "Jasmine", age: 24, status: true, id:6},
    {name: "Lucas", age: 42, status: true, id:7},
    {name: "Scarlett", age: 41, status: true, id:8},
    {name: "Aiden", age: 32, status: false, id:9},
    {name: "Isabella", age: 35, status: true, id:10},
    {name: "Jonh", age: 31, status: true, id:11},
    {name: "Megan", age: 29, status: false, id:12},
    {name: "Melania", age: 28, status: true, id:13},
    {name: "Evelyn", age: 30, status: true, id:14},
    {name: "Leo", age: 27, status: false, id:15},
    {name: "Jasmine", age: 24, status: true, id:16},
    {name: "Lucas", age: 42, status: true, id:17},
    {name: "Scarlett", age: 41, status: true, id:18},
    {name: "Aiden", age: 32, status: false, id:19},
    {name: "Isabella", age: 35, status: true, id:20}
];

let i = 0;
while (i < users3.length) {
    document.write (`<h1>Age ${users3[i].age}</h1>`)
    i++;
}