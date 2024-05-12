// - створити стрілочну функцію яка повертає найменьше число з масиву

let theSmallestNumber = arr => {
    let theSmallest = arr[0];
        for (let i = 1; i < arr.length; i++) {
            if (arr[i] < theSmallest) {
                theSmallest = arr[i];
                console.log(theSmallest);
            }
        }
    }
theSmallestNumber([12,15,16,2,17]);