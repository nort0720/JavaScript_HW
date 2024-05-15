// Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]}
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
let groupOfCards = {
    spade:[],
    diamond:[],
    heart:[],
    clubs:[]
};
for (let card of cards) {
    groupOfCards[card.cardSuit].push(card);
}
console.log(groupOfCards);