let game = {
  'player': { 'scoreSpan': '#player-result', 'div': '#player-box', 'score': 0 },
  'cpu': { 'scoreSpan': '#dealer-result', 'div': '#dealer-box', 'score': 0 },
}
const PLAYER = game['player']
const CPU = game['cpu']

document.querySelector('#btn-hit').addEventListener("click", bjHit)

function bjHit() {
  alert('sell')
}