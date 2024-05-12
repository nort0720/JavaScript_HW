// - створити стрілочну функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let printList = item => document.write (
                `<ul>
                    <li>${item}</li>
                    <li>${item}</li>
                    <li>${item}</li>
                </ul>`
            );
printList("Lorem");