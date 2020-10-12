$(() => {
  const suits = ["spades", "diamonds", "clubs", "hearts"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
  ];

  function getDeck() {
    let deck = [];

    for (let i = 0; i < suits.length; i++) {
      for (let x = 0; x < values.length; x++) {
        let card = { Value: values[x], Suit: suits[i] };
        deck.push(card);
      }
    }
    return deck;
  }

  function shuffleDeck(deck) {
    // shuffle logic - loops 1000 times and swaps two card locations each loop
    for (let i = 0; i < 1000; i++) {
      let location1 = Math.floor(Math.random() * deck.length);
      let location2 = Math.floor(Math.random() * deck.length);
      let tmp = deck[location1];

      deck[location1] = deck[location2];
      deck[location2] = tmp;
    }
  }

  function renderDeck(deck) {
    document.getElementById("card-table").innerHTML = "";

    // creates a new card div with two divs inside holding value and suit
    // on each loop then appends that card to our main div 'card-table'
    for (let i = 0; i < deck.length; i++) {
      let card = document.createElement("div");
      let value = document.createElement("div");
      let suit = document.createElement("div");
      card.className = "card";
      value.className = "value";
      suit.className = "suit " + deck[i].Suit;

      value.innerHTML = deck[i].Value;
      card.appendChild(value);
      card.appendChild(suit);

      document.getElementById("card-table").appendChild(card);
    }
  }

  // creating new deck
  let newDeck = getDeck();

  // shuffle newDeck
  shuffleDeck(newDeck);

  // render deck
  renderDeck(newDeck);
});
