// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).
let x = undefined;
let ter1 = x == 0 ? "default" : false;
let ter2 = x === null ? "default" : false;
let ter3 = x === undefined ? "default" : false;
