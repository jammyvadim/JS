console.log('#bolvdlhP')
console.log('описати колоду карт (від 6 до туза без джокерів). Більшу частину колоди можна описати з використанням циклу')
console.log('Після опису, використовуючи функції масивів:')
console.log(' – знайти піковий туз')
console.log(' – всі шістки')
console.log(' – всі червоні карти')
console.log(' – всі буби')
console.log(' – всі трефи від 9 та більше')

const  cardSuits = [
    {
        suit_id: 1,
        suit_name_en: 'spades',
        suit_name_ua: 'піки',
        suit_color: 'black'
    },
    {
        suit_id: 2,
        suit_name_en: 'diamond',
        suit_name_ua: 'буби',
        suit_color: 'red'
    },
    {
        suit_id: 3,
        suit_name_en: 'heart',
        suit_name_ua: 'чирви',
        suit_color: 'red'
    },
    {
        suit_id: 4,
        suit_name_en: 'clubs',
        suit_name_ua: 'трефи',
        suit_color: 'black'
    }
]

const cardOrders = [
    {
        card_order: 6,
        card_name_en: 'six',
        card_name_ua: 'шість'
    },
    {
        card_order: 7,
        card_name_en: 'seven',
        card_name_ua: 'сім'
    },
    {
        card_order: 8,
        card_name_en: 'eight',
        card_name_ua: 'вісім'
    },
    {
        card_order: 9,
        card_name_en: 'nine',
        card_name_ua: 'дев\'ять'
    },
    {
        card_order: 10,
        card_name_en: 'ten',
        card_name_ua: 'десять'
    },
    {
        card_order: 11,
        card_name_en: 'jack',
        card_name_ua: 'валет'
    },
    {
        card_order: 12,
        card_name_en: 'queen',
        card_name_ua: 'дама'
    },
    {
        card_order: 13,
        card_name_en: 'king',
        card_name_ua: 'король'
    },
    {
        card_order: 14,
        card_name_en: 'ace',
        card_name_ua: 'туз'
    }
]

let deck_of_cards = []

for (cardSuit of cardSuits) {
    for (cardOrder of cardOrders) {
        deck_of_cards.push(
            {
                deck_id: cardSuit.suit_id * 100 + cardOrder.card_order,
                deck_card_full_name_en: cardOrder.card_name_en +' of '+ cardSuit.suit_name_en,
                deck_card_full_name_ua: cardOrder.card_name_ua +' '+ cardSuit.suit_name_ua,
                deck_suit_id: cardSuit.suit_id,
                deck_suit_name_en: cardSuit.suit_name_en,
                deck_suit_name_ua: cardSuit.suit_name_ua,
                deck_suit_color: cardSuit.suit_color,
                deck_card_order: cardOrder.card_order,
                deck_card_name_en: cardOrder.card_name_en,
                deck_card_name_ua: cardOrder.card_name_ua
            }
        )
    }
}

console.log('---------------------------------')
console.log('Колода карт')
console.log(deck_of_cards)

console.log('– знайти піковий туз')
let card_ace_spades = deck_of_cards.filter(card => card.deck_card_name_en==='ace' && card.deck_suit_name_en==='spades')
console.log(card_ace_spades)

console.log('– всі шістки')
let cards_sixes = deck_of_cards.filter(card => card.deck_card_order===6)
console.log(cards_sixes)

console.log('– всі червоні карти')
let cards_red_color = deck_of_cards.filter(card => card.deck_suit_color==='red')
console.log(cards_red_color)

console.log('– всі буби')
let cards_diamond_suit = deck_of_cards.filter(card => card.deck_suit_name_en==='diamond')
console.log(cards_diamond_suit)

console.log('– всі трефи від 9 та більше')
let cards_clubs_9_and_more = deck_of_cards.filter(card => card.deck_suit_name_en==='clubs' && card.deck_card_order>=9)
console.log(cards_clubs_9_and_more)