// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
function Car(model, manufacturer, year, maxSpeed, engVolume) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engVolume = engVolume;
    this.drive = function() {
        console.log(`Їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }
    this.info = function () {
             console.log("Model:", this.model);
             console.log("Manufacturer:", this.manufacturer);
             console.log("Year:", this.year);
             console.log("MaxSpeed km/h:", this.maxSpeed);
             console.log("EngVolume:", this.engVolume);
            }
    this.increaseMaxSpeed = function(newSpeed) {
        this.maxSpeed += newSpeed;
    };
    this.changeYear = function(newValue) {
        this.year = newValue;
    };
    this.addDriver = function(driver) {
        this.driver = driver;
    };
}
let car1 = new Car ("X5", "BMW", 2012, 350, 3.5);
let driver = { name: "Іван", age: 30, experience: 10 };
console.log(car1);
car1.changeYear(2023);
car1.addDriver(driver);
car1.increaseMaxSpeed(55);
car1.info();