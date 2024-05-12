// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах

let swap = (arr, index1,index2) => {
   let a = arr[index1];
   arr[index1] = arr[index2];
   arr[index2] = a;
   console.log(arr);
}
swap([12,3,4,6], 0, 1);