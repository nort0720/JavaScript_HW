// Через Array.prototype. створити власний foreach, filter, map
Array.prototype.myForEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};

// Приклад використання
const arr = [1, 2, 3];
arr.myForEach((element, index) => {
    console.log(`Element: ${element}, Index: ${index}`);
});

Array.prototype.myFilter = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};

// Приклад використання
const arr2 = [1, 2, 3, 4, 5];
const filteredArr = arr2.myFilter(element => element > 2);
console.log(filteredArr);

Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
};

// Приклад використання
const arr3 = [1, 2, 3];
const mappedArr = arr3.myMap(element => element * 2);
console.log(mappedArr);