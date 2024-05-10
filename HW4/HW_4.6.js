// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
function printList(item) {
        document.write (
            `<ul>
                <li>${item}</li>
                <li>${item}</li>
                <li>${item}</li>
            </ul>`
        );
    }
    printList ("Hello everybody");