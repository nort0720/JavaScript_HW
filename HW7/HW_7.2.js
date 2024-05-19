// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor (id, name, surname , email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let client1 = new Client (1, "Олександр", "Ковальчук", "o.kovalchuk@example.com", 380671234567, ["правльна машина", "праска", "бойлер"]);
let client2 = new Client (2, "Юлія", "Петренко", "yulia.petrenko@example.com", 380501234578, ["правльна машина", "праска", "посудомийка"]);
let client3 = new Client (3, "Михайло", "Василенко", "m.vasylenko@example.com", 380991234566, ["правльна машина", "праска", "бойлер", "холодильник"]);
let client4 = new Client (4, "Анастасія", "Сидоренко", "n.sydorenko@example.com", 380931234565, ["правльна машина", "праска", "бойлер", "міксер", "холодильник"]);
let client5 = new Client (5, "Володимир", "Шевченко", "v.shevchenko@example.com", 380661234564, ["правльна машина", "праска"]);
let client6 = new Client (6, "Олена", "Ковальенко", "olena.kovalenko@example.com", 380731234563, ["правльна машина", "праска", "гриль", "кухоний комбайн"]);
let client7 = new Client (7, "Сергій", "Петров", "s.petrenko@example.com", 380681234562, ["правльна машина"]);
let client8 = new Client (8, "Анна", "Ковальченко", "anna.kovalchenko@example.com", 380951234561, ["праска"]);
let client9 = new Client (9, "Іван", "Шевчук", "ivan.shevchuk@example.com", 380961234560, ["правльна машина", "монітор"]);
let client10 = new Client (10, "Лідія", "Мельник", "lidia.melnik@example.com", 380991234568, ["ПК", "телевізор", "монітор", "холодильник", "гриль"]);

// створити пустий масив, наповнити його 10 об'єктами Client
let Clients = [];
Clients.push(client1, client2, client3, client4, client5, client6, client7, client8, client9, client10);
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
Clients.sort((client1, client2) => client1.order.length - client2.order.length);
console.log(Clients);