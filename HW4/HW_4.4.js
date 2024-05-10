// - створити функцію яка приймає масив та виводить кожен його елемент
let books = [
    {title:"Lorem1", pages: 310, author:"Mikle"},
    {title:"Lorem2", pages: 289, author:"John"},
    {title:"Lorem3", pages: 37, author:"Monica"},
    {title:"Lorem4", pages: 89, author:"Ivan"},
    {title:"Lorem5", pages: 74, author:"Eugene"},
    {title:"Lorem6", pages: 164, author:"Alina"},
    {title:"Lorem7", pages: 183, author:"Jessica"},
    {title:"Lorem8", pages: 131, author:"Anton"}
];
function arrayBooks(books) {
    for (const book of books) {
        console.log(book);
    }
    }
    arrayBooks (books);