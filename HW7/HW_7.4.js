// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
//     -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
//     -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
//     -- changeYear (newValue) - змінює рік випуску на значення newValue
//     -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car {
    constructor(model, manufacturer, year, maxSpeed, engineVolume) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineVolume = engineVolume;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    }
    info() {
        console.log(`Модель - ${this.model}`);
        console.log(`Виробник - ${this.manufacturer}`);
        console.log(`Рік випуску - ${this.year}`);
        console.log(`Максимальна швидкість - ${this.maxSpeed}`);
        console.log(`Об'єм двигуна - ${this.engineVolume}`);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }
    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(driver) {
        this.driver = driver;
    }
    }
    let myCar = new Car('Model S', 'Tesla', 2020, 250, 3.0);
let driver = {
    name: 'John Ivanov',
    age: 32,
    experience: 5
};
    myCar.addDriver(driver);
    myCar.drive();
    myCar.info();
    myCar.increaseMaxSpeed(50);
    console.log(`Нова максимальна швидкість - ${myCar.maxSpeed}`);
    myCar.changeYear(2022);
    console.log(`Новий рік випуску - ${myCar.year}`);
    console.log(myCar);
