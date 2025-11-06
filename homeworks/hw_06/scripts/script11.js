console.log('#EP5I1UUzAX')
console.log('Взяти описану колоду карт, та за допомогою reduce “упакувати” всі карти по “мастях” в об’єкт')

const  cardSuits = [
    {
        suit_id: 1,
        suit_name_en: 'spades',
        suit_name_ua: 'піки',
        suit_color: 'black'
    },
    {
        suit_id: 2,
        suit_name_en: 'diamonds',
        suit_name_ua: 'буби',
        suit_color: 'red'
    },
    {
        suit_id: 3,
        suit_name_en: 'hearts',
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

const result_object = deck_of_cards.reduce((accumulator, currentValue) => {
    if (currentValue.deck_suit_name_en === 'spades') {
        accumulator.spades.push(currentValue.deck_card_full_name_en);
    } else if (currentValue.deck_suit_name_en === 'diamonds') {
        accumulator.diamonds.push(currentValue.deck_card_full_name_en);
    } else if (currentValue.deck_suit_name_en === 'hearts') {
        accumulator.hearts.push(currentValue.deck_card_full_name_en);
    } else if (currentValue.deck_suit_name_en === 'clubs') {
        accumulator.clubs.push(currentValue.deck_card_full_name_en);
    }
    return accumulator;
}, {spades: [], diamonds: [], hearts: [], clubs: []})

console.log(result_object)
