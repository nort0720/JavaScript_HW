// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
function summ(arr) {
    let sum = 0;
    for (const number of arr) {
        sum += number;
    }
    return sum;
}
summ([11,22,3,4,5]);