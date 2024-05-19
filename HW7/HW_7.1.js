// // // Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// // // створити пустий масив, наповнити його 10 об'єктами new User(....)
function User(id, name, surname , email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User (1, "Олександр", "Ковальчук", "o.kovalchuk@example.com", 380671234567);
let user2 = new User (2, "Юлія", "Петренко", "yulia.petrenko@example.com", 380501234578);
let user3 = new User (3, "Михайло", "Василенко", "m.vasylenko@example.com", 380991234566);
let user4 = new User (4, "Анастасія", "Сидоренко", "n.sydorenko@example.com", 380931234565);
let user5 = new User (5, "Володимир", "Шевченко", "v.shevchenko@example.com", 380661234564);
let user6 = new User (6, "Олена", "Ковальенко", "olena.kovalenko@example.com", 380731234563);
let user7 = new User (7, "Сергій", "Петров", "s.petrenko@example.com", 380681234562);
let user8 = new User (8, "Анна", "Ковальченко", "anna.kovalchenko@example.com", 380951234561);
let user9 = new User (9, "Іван", "Шевчук", "ivan.shevchuk@example.com", 380961234560);
let user10 = new User (10, "Лідія", "Мельник", "lidia.melnik@example.com", 380991234568);

let Users = [];

Users.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

console.log(Users);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
let UsersWithEvenId = Users.filter(user => user.id % 2 === 0);

console.log(UsersWithEvenId);

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
Users.sort((user1, user2) => user1.id - user2.id);
console.log(Users);