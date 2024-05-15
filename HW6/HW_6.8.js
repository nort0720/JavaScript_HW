// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
 // -- відсортувати його за спаданням за monthDuration
coursesAndDurationArray.sort((course1, course2) => course2.monthDuration - course1.monthDuration);
console.log(coursesAndDurationArray);