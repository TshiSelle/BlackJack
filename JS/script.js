let game = {
  'player': { 'scoreSpan': '#player-result', 'div': '#player-box', 'score': 0 },
  'cpu': { 'scoreSpan': '#dealer-result', 'div': '#dealer-box', 'score': 0 },
  'cards': ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  'cardmapping': { 'A': [1, 11], '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10 },
}
const PLAYER = game['player']
const CPU = game['cpu']
const hitSound = new Audio('Assets/sounds/swish.m4a')

document.querySelector('#btn-hit').addEventListener("click", bjHit)
document.querySelector('#btn-deal').addEventListener("click", dealBtn)

function bjHit() {
  let playerCard = randomCard()
  let dealerCard = randomCard()
  showCard(playerCard, PLAYER)
  showCard(dealerCard, CPU)
  updateScore(playerCard, PLAYER)
  updateScore(dealerCard, CPU)


}
function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13)
  console.log(bjHit)
  return game['cards'][randomIndex]

}
function showCard(card, activePlayer) {
  let cardImage = document.createElement('img')
  cardImage.src = `Assets/images/${card}.png`
  cardImage.style.backgroundColor = 'white'
  cardImage.style.height = '100px'
  cardImage.style.width = 'auto'
  cardImage.style.borderRadius = '5px'
  cardImage.style.margin = '5px'

  console.log(cardImage)
  document.querySelector(activePlayer['div']).appendChild(cardImage)
  hitSound.play()
}
function dealBtn() {
  let playerImages = document.querySelector('#player-box').querySelectorAll('img')
  let cpuImages = document.querySelector('#dealer-box').querySelectorAll('img')


  for (let i = 0; i < playerImages.length; i++) { // player array removal
    playerImages[i].remove();
  }
  for (let i = 0; i < cpuImages.length; i++) { //dealer array removal
    cpuImages[i].remove();
  }


}
function updateScore(card, activePlayer) {
  if (card === 'A') {
    if (activePlayer['score'] + game['cardmapping'][card][1] <= 21) {
      activePlayer['score'] += game['cardmapping'][card][1]
    }
    else {
      activePlayer['score'] += game['cardmapping'][card][0]
    }
  } else {


    activePlayer['score'] += game['cardmapping'][card]
  }
  document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
}

