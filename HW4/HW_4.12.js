// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
function swap(arr, index1,index2) {
    if (index1 === 0 && index2 === 1) {
        arr = [arr[1], arr[0], arr[2], arr[3]];
        console.log(arr);
    }
    else if (index1 === 1 && index2 === 2) {
        arr = [arr[0], arr[2], arr[1], arr[3]];
        console.log(arr);
    }
    else if (index1 === 2 && index2 === 3) {
        arr = [arr[0], arr[1], arr[3], arr[2]];
        console.log(arr);
    }
}
swap([12,3,4,6], 2, 3);