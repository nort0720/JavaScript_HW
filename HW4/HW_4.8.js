// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function arrayPrimitives(number, string, boolean) {
    let items = [number,string,boolean];
    let a1 = `<ul>`;
    let a2 = `</ul>`;
    document.write (a1);
        for (let i = 0; i < items.length; i++) {
    document.write(`<li>${items[i]}</li>`);
}
    document.write (a2);
    }
arrayPrimitives(12, "hello", true);