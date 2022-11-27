const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
];

cardArray.sort( () => {
    return 0.5 - Math.random();
});

console.log(cardArray);

const grid = document.querySelector(".grid");
const selectedCards = [];
const selectedCardsIds = [];

function createGameBoard() {
    cardArray.forEach( (element, index) => {
        const card = document.createElement('img');
        card.setAttribute('src', '/home/joew/Desktop/memoryGame/images/blank.png');
        card.setAttribute('data-id', index);
        grid.append(card);
        card.addEventListener('click', flipCard);
        console.log(card, index);   
    });
}

function checkMatch() {
    const cards = document.querySelectorAll('.grid img');
    console.log('checking for match');
    if (selectedCardsIds[0] === selectedCardsIds[1]) {
        alert('Are you trying to cheat? You can not choose the same card twice!');
    }
    else if (selectedCards[0] === selectedCards[1]) {
        alert('You found a match!');
        const result = document.querySelector('.result');
        const h1 = document.createElement('h1');
        result.append(h1);
        cards[selectedCardsIds[0]].setAttribute('src', 'images/white.png');
        cards[selectedCardsIds[1]].setAttribute('src', 'images/white.png');
        console.log(`selected cards array ${selectedCards}`);
        console.log(`slected cards id array ${selectedCardsIds}`);
        cards[selectedCardsIds[0]].removeEventListener('click', flipCard);
        cards[selectedCardsIds[1]].removeEventListener('click', flipCard);
    }
    else {
        cards[selectedCardsIds[0]].setAttribute('src', 'images/blank.png');
        cards[selectedCardsIds[1]].setAttribute('src', 'images/blank.png');
    }
    selectedCards.length = 0;
    selectedCardsIds.length = 0;
}   

function flipCard() {
    const cardId = this.getAttribute('data-id');
    console.log('clicked', cardId);
    // console.log(cardArray[cardId].name);    
    selectedCards.push(cardArray[cardId].name);
    selectedCardsIds.push(cardId);
    console.log(selectedCards);
    this.setAttribute('src', cardArray[cardId].img); 
    if (selectedCards.length === 2) {
        checkMatch();
        selectedCards.length = 0;
        selectedCardsIds.length = 0;
    }
}

createGameBoard();
