// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let customers = [
        {id:1, name:`Masha`, age:28},
        {id:2, name:`David`, age:31},
        {id:3, name:`Natasha`, age:42},
        {id:3, name:`Tanya`, age:33}
                    ]
function arrayCustomers(customers) {
        let i = 0;
        while (i < customers.length) {
            document.write(`<div>${customers[i].id}, ${customers[i].name}, ${customers[i].age}</div>`);
            i++;
        }
}
arrayCustomers(customers);