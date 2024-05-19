// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// За допомоги циклу знайти яка попелюшка повинна бути з принцом.
// Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

    class Cinderella {
        constructor(name, age, shoeSize) {
            this.name = name;
            this.age = age;
            this.shoeSize = shoeSize;
        }
    }

    let cinderellas = [
        new Cinderella('Аліна', 20, 36),
        new Cinderella('Марія', 21, 37),
        new Cinderella('Ольга', 22, 38),
        new Cinderella('Анна', 23, 36.5),
        new Cinderella('Ірина', 24, 37.5),
        new Cinderella('Наталія', 25, 38.5),
        new Cinderella('Вікторія', 26, 39),
        new Cinderella('Софія', 27, 40),
        new Cinderella('Єлизавета', 28, 36),
        new Cinderella('Катерина', 29, 41)
    ];

    class Prince {
        constructor(name, age, foundShoeSize) {
            this.name = name;
            this.age = age;
            this.foundShoeSize = foundShoeSize;
        }

        // Метод для пошуку попелюшки за допомогою циклу
        findCinderella(cinderellas) {
            for (let cinderella of cinderellas) {
                if (cinderella.shoeSize === this.foundShoeSize) {
                    return cinderella;
                }
            }
        }

        // Метод для пошуку попелюшки за допомогою методу find
        findCinderellaWithFind(cinderellas) {
            return cinderellas.find(cinderella => cinderella.shoeSize === this.foundShoeSize);
        }
    }

    // Створюємо об'єкт класу Prince
let prince1 = new Prince('Олександр', 30, 38);

// Пошук попелюшки за допомогою циклу
const foundCinderella = prince1.findCinderella(cinderellas);
if (foundCinderella) {
    console.log(`Попелюшка знайдена: ${foundCinderella.name}, ${foundCinderella.age} років, розмір ноги ${foundCinderella.shoeSize}`);
} else {
    console.log('Попелюшка не знайдена.');
}

let foundCinderellaWithFind = prince1.findCinderellaWithFind(cinderellas);
if (foundCinderellaWithFind) {
    console.log(`Попелюшка знайдена за допомогою find: ${foundCinderellaWithFind.name}, ${foundCinderellaWithFind.age} років, розмір ноги ${foundCinderellaWithFind.shoeSize}`);
} else {
    console.log('Попелюшка не знайдена за допомогою find.');
}