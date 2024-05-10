// - створити функцію яка повертає найменьше число з масиву
let numbers = [12,22,33,45,45,65]
function theSmallestNumber(numbers) {
    return Math.min(...numbers);
}
theSmallestNumber(numbers);