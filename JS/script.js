let game = {
  'player': { 'scoreSpan': '#player-result', 'div': '#player-box', 'score': 0 },
  'cpu': { 'scoreSpan': '#dealer-result', 'div': '#dealer-box', 'score': 0 },
  'cards': ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"],
}
const PLAYER = game['player']
const CPU = game['cpu']
const hitSound = new Audio('Assets/sounds/swish.m4a')

document.querySelector('#btn-hit').addEventListener("click", bjHit)
document.querySelector('#btn-deal').addEventListener("click", dealBtn)

function bjHit() {
  showCard(PLAYER)
  showCard(CPU);
}
function showCard(activePlayer) {
  let cardImage = document.createElement('img')
  cardImage.src = 'Assets/images/Q.png'
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
function randomCard() {
  let randomIndex = Math.floor(Math.random() * 13)
  return bjHit['cards'][randomIndex]
}