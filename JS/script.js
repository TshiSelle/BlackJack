let game = {
  'player': { 'scoreSpan': '#player-result', 'div': '#player-box', 'score': 0 },
  'cpu': { 'scoreSpan': '#dealer-result', 'div': '#dealer-box', 'score': 0 },
}
const PLAYER = game['player']
const CPU = game['cpu']
const hitSound = new Audio('Assets/sounds/swish.m4a')

document.querySelector('#btn-hit').addEventListener("click", bjHit)
document.querySelector('#btn-deal').addEventListener("clicl", dealBtn)

function bjHit() {
  showCard(PLAYER);
}
function showCard(activePlayer) {
  let cardImage = document.createElement('img')
  cardImage.src = 'Assets/images/Q.png'
  document.querySelector(activePlayer['div']).appendChild(cardImage)
  hitSound.play()
}
function dealBtn() {
  let playerImages = document.querySelector('#player-box').querySelectorAll('img')
}