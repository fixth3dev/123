function subCard() {
  cards -= 1;
  if (cards <= 0) {
    cards = 0;
  }
  document.getElementById("cardsQuantity").innerHTML = cards;
}
