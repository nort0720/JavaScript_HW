// - створити стрілочну функцію яка приймає масив та виводить кожен його елемент

let arrayBooks = books => {for (const book of books) {
            console.log(book);
        };
    }
books = [{title:"Lorem2", pages: 310, author:"Mikle"},
        {title:"Lorem", pages: 310, author:"Mikle"},
        {title:"Lorem", pages: 310, author:"Mikle"},
        {title:"Lorem", pages: 310, author:"Mikle"},
        {title:"Lorem", pages: 310, author:"Mikle"},
        {title:"Lorem", pages: 310, author:"Mikle"},
        {title:"Lorem", pages: 310, author:"Mikle"},
        {title:"Lorem", pages: 310, author:"Mikle"}];
console.log(arrayBooks(books));