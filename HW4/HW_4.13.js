// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
let currencies = [
    {currency:"USD", value:40},
    {currency:"EUR", value:42},
    {currency:"GBP", value:45}
]
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let currency = exchangeCurrency;
    switch (currency) {
        case "USD":
            document.write(sumUAH / currencies[0].value, " USD");
            break;
        case "EUR":
            document.write(sumUAH / currencies[1].value, " EUR");
            break;
        case "GBP":
            document.write(sumUAH / currencies[2].value, " GBP");
            break;
    }
}
exchange(40000, currencies[2].value, currencies[2].currency);