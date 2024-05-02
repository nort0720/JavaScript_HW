// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
let a = coursesAndDurationArray[0];
let b = coursesAndDurationArray[1];
let c = coursesAndDurationArray[2];
let d = coursesAndDurationArray[3];
let e = coursesAndDurationArray[4];
if (a.monthDuration > 5) {
    console.log("Super")
}
if (b.monthDuration >5) {
    console.log("Super")
}
if (c.monthDuration >5) {
    console.log("Super")
}
if (d.monthDuration >5) {
    console.log("Super")
}
if (e.monthDuration >5) {
    console.log("Super")
}