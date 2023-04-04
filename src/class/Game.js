class Game {
  constructor() {
    this.btnClick = this.btnClick.bind(this)

    this.userScore = 0
    this.userTry = 5
    this.interval = null

    this.png = document.querySelector('img.image')
    this.itemsList = document.querySelectorAll('.game-item')
    this.gameCube = document.querySelector('.game-cube')
    this.score = document.querySelector('div.score')

    this.gameCube.addEventListener('click', this.btnClick)
  }

  getRandomId(min = 0, max = 15) {
    return Math.floor(Math.random() * (max - min) + min);
  }

  start() {
    this.itemsList[this.getRandomId()].insertBefore(this.png, null)
    this.interval = setInterval(() => {
      this.itemsList[this.getRandomId()].insertBefore(this.png, null)
    }, 1000)
  }

  loseGame() {
    if (this.userTry === 1) {
      clearInterval(this.interval)
      const gameEnd = document.createElement("div")
      gameEnd.textContent = 'Вы проиграли!'
      gameEnd.classList.add('game-end')
      this.score.parentElement.insertBefore(gameEnd, this.score)
    }

    this.score.parentElement.querySelector('.try').textContent = `Ваши попытки: ${--this.userTry}`
  }

  btnClick(e) {
    if (e.target.closest('.game-item').querySelector('.image')) {
      this.score.textContent = `Ваш счёт: ${++this.userScore}`
      clearInterval(this.interval)
      this.start()
    } else {
      this.loseGame()
    }

    console.log(this.userScore)
  }
}

export default Game
