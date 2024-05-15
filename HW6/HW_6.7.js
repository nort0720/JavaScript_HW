// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction
let numbers = [11,21,3];
function sortNums(numbers, direction) {
    if (direction === "ascending") {
        console.log(numbers.sort((a,b) => a - b));
    }else {
        console.log(numbers.sort((a,b) => b - a));
    }
}
sortNums(numbers, "ascending");