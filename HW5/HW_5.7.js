// - створити стрілочну функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

let printList = (item, NumberOfRows) => {
    let items = [
        {name:`<li>${item}</li>`},
        {name:`<li>${item}</li>`},
        {name:`<li>${item}</li>`},
        {name:`<li>${item}</li>`},
        {name:`<li>${item}</li>`},
        {name:`<li>${item}</li>`},
        {name:`<li>${item}</li>`},
        {name:`<li>${item}</li>`}
        ];
    let a1 = `<ul>`;
    let a2 = `</ul>`;
    document.write (a1);
            for (let i = NumberOfRows; i < items.length; i++) {
                 document.write (
                        `${items[i].name}`
                );
            }
    document.write (a2);
}
printList("Hello world", 5);