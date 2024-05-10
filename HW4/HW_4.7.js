// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
function printList(text, IndexOfObjectToStart) {
    let items = [
                {name:`<li>${text}</li>`},
                {name:`<li>${text}</li>`},
                {name:`<li>${text}</li>`},
                {name:`<li>${text}</li>`},
                {name:`<li>${text}</li>`},
                {name:`<li>${text}</li>`},
                {name:`<li>${text}</li>`},
                {name:`<li>${text}</li>`}
                ];
    let a1 = `<ul>`;
    let a2 = `</ul>`;
                document.write (a1);
                        for (let i = IndexOfObjectToStart; i < items.length; i++) {
                            document.write (
                                        `${items[i].name}`
                                );
                        }
                document.write (a2);
        }
        printList ("Hello everybody", 3);