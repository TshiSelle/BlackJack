let game = {
  'player': { 'scoreSpan': '#player-result', 'div': '#player-box', 'score': 0 },
  'cpu': { 'scoreSpan': '#dealer-result', 'div': '#dealer-box', 'score': 0 },
  'cards': ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
  'cardmapping': { 'A': [1, 11], '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10 },
  'wins': 0,
  'losses': 0,
  'draws': 0,
}
const PLAYER = game['player']
const CPU = game['cpu']
const hitSound = new Audio('Assets/sounds/swish.m4a')
const winSound = new Audio('Assets/sounds/cash.mp3')
const loseSound = new Audio('Assets/sounds/aww.mp3')

document.querySelector('#btn-hit').addEventListener("click", playerHit)
document.querySelector('#btn-stand').addEventListener("click", dealerHit)
document.querySelector('#btn-deal').addEventListener("click", dealBtn)

function playerHit() {
  let card = randomCard()
  showCard(card, PLAYER)
  updateScore(card, PLAYER)

}
function dealerHit() {
  let card = randomCard()
  showCard(card, CPU)
  updateScore(card, CPU)

  if (CPU['score'] > 15) {
    showResult(winner())
  }
}

function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13)
  return game['cards'][randomIndex]

}
function showCard(card, activePlayer) {
  if (activePlayer['score'] < 21) {
    let cardImage = document.createElement('img')
    cardImage.style.backgroundColor = 'white'
    cardImage.style.height = '100px'
    cardImage.style.width = 'auto'
    cardImage.style.borderRadius = '5px'
    cardImage.style.margin = '5px'
    cardImage.src = `Assets/images/${card}.png`
    document.querySelector(activePlayer['div']).appendChild(cardImage)
    hitSound.play()
  }

}
function dealBtn() {
  showResult(winner())
  let playerImages = document.querySelector('#player-box').querySelectorAll('img')
  let cpuImages = document.querySelector('#dealer-box').querySelectorAll('img')


  for (let i = 0; i < playerImages.length; i++) { // player array removal
    playerImages[i].remove();
  }
  for (let i = 0; i < cpuImages.length; i++) { //dealer array removal
    cpuImages[i].remove();
  }
  PLAYER['score'] = 0
  CPU['score'] = 0

  document.querySelector('#player-result').textContent = 0
  document.querySelector('#dealer-result').textContent = 0
  document.querySelector('#player-result').style.color = '#ffffff'
  document.querySelector('#dealer-result').style.color = '#ffffff'


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
  if (activePlayer['score'] > 21) {
    document.querySelector(activePlayer['scoreSpan']).textContent = 'YOU LOSE!'
    document.querySelector(activePlayer['scoreSpan']).style.color = 'red'
  } else {
    document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score']
  }

}
function winner() {
  let winner;

  if (PLAYER['score'] <= 21) {
    if (PLAYER['score'] > CPU['score'] || (CPU['score'] > 21)) {
      game['wins']++
      winner = PLAYER
    }
    else if (PLAYER['score'] < CPU['score']) {
      game['losses']++
      winnder = CPU;
    }

    else if (PLAYER['score'] === CPU['score']) {
      game['draws']++
    }
  }
  else if (PLAYER['score'] > 21 && CPU['score'] <= 21) {
    game['losses']++
    winner = CPU
  }
  else if (PLAYER['score'] > 21 && CPU['score'] > 21) {
    game['draws']++

  }
  return winner

}
function showResult(winner) {
  let message, messageColor

  if (winner === PLAYER) {
    message = 'YOU WIN BOI!'
    messageColor = 'green'
    winSound.play()

  }
  else if (winner === CPU) {
    message = 'YOU LOST BOI!!'
    messageColor = 'red'
    loseSound.play()
  }
  else {
    message = "IT'S A DRAW BOI!"
    messageColor = 'yellow'
  }
  document.querySelector('#lets-play').textContent = message
  document.querySelector('#lets-play').style.color = messageColor

}

