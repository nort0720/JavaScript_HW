// описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {cardSuit:"spade", value:"6", color:"black"},
    {cardSuit:"diamond", value:"6", color:"red"},
    {cardSuit:"heart", value:"6", color:"red"},
    {cardSuit:"clubs", value:"6", color:"black"},
    {cardSuit:"spade", value:"7", color:"black"},
    {cardSuit:"diamond", value:"7", color:"red"},
    {cardSuit:"heart", value:"7", color:"red"},
    {cardSuit:"clubs", value:"7", color:"black"},
    {cardSuit:"spade", value:"8", color:"black"},
    {cardSuit:"diamond", value:"8", color:"red"},
    {cardSuit:"heart", value:"8", color:"red"},
    {cardSuit:"clubs", value:"8", color:"black"},
    {cardSuit:"spade", value:"9", color:"black"},
    {cardSuit:"diamond", value:"9", color:"red"},
    {cardSuit:"heart", value:"9", color:"red"},
    {cardSuit:"clubs", value:"9", color:"black"},
    {cardSuit:"spade", value:"10", color:"black"},
    {cardSuit:"diamond", value:"10", color:"red"},
    {cardSuit:"heart", value:"10", color:"red"},
    {cardSuit:"clubs", value:"10", color:"black"},
    {cardSuit:"spade", value:"jack", color:"black"},
    {cardSuit:"diamond", value:"jack", color:"red"},
    {cardSuit:"heart", value:"jack", color:"red"},
    {cardSuit:"clubs", value:"jack", color:"black"},
    {cardSuit:"spade", value:"queen", color:"black"},
    {cardSuit:"diamond", value:"queen", color:"red"},
    {cardSuit:"heart", value:"queen", color:"red"},
    {cardSuit:"clubs", value:"queen", color:"black"},
    {cardSuit:"spade", value:"king", color:"black"},
    {cardSuit:"diamond", value:"king", color:"red"},
    {cardSuit:"heart", value:"king", color:"red"},
    {cardSuit:"clubs", value:"king", color:"black"},
    {cardSuit:"spade", value:"ace", color:"black"},
    {cardSuit:"diamond", value:"ace", color:"red"},
    {cardSuit:"heart", value:"ace", color:"red"},
    {cardSuit:"clubs", value:"ace", color:"black"}
];
// - знайти піковий туз
let filter1 = cards.filter(card => card.value === "ace" && card.cardSuit === "spade");
console.log(filter1);
// - всі шістки
let filter2 = cards.filter(card => card.value === "6");
console.log(filter2);
// - всі червоні карти
let filter3 = cards.filter(card => card.color === "red");
console.log(filter3);
// - всі буби
let filter4 = cards.filter(card => card.cardSuit === "diamond");
console.log(filter4);
// - всі трефи від 9 та більше
let filter5 = cards.filter(card => card.cardSuit === "clubs" && (card.value >= 9 || card.value === "jack" || card.value === "queen" || card.value === "king" || card.value === "ace"));
console.log(filter5);