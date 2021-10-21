function addCard() {
  cards += 1;
  if (cards >= 12) {
    cards = 12;
  }
  document.getElementById("cardsQuantity").innerHTML = cards;
}
