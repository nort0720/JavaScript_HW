// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)

let currencies = [
    {currency:'USD',value:40},
    {currency:'EUR',value:42},
    {currency:'GBP',value:46}
];
let exchange = (sumUAH, currencyValues, exchangeCurrency) => {
    let exchangeRate;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchangeRate = currencyValues[i].value;
        }
        result = sumUAH / exchangeRate;
    }

}
exchange(40000, currencies, 'USD');
console.log(result);