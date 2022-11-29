const slide = document.querySelector(`#slide`)
const sliding = document.querySelectorAll(`#slide li`)
const prevBtn = document.querySelector(`.preview`)
const nextBtn = document.querySelector(`.next`)

let index = 0
let interval = setInterval(slides, 1000)

function slides(n) {
    if (index === 3) index = 0

    slide.setAttribute(`class`, `on` + (index + 1))
    index++
}
console.log(interval)

function prevBtnhandler() {
    if(0 <index < 4) {
    slide.setAttribute(`class`, `on` + (index - 1))
    clearInterval(interval)
    }
}

prevBtn.addEventListener(`click`, prevBtnhandler)

function nextBtnhandler() {
    if(0 < index < 4) {
    slide.setAttribute(`class`, `on` + (index + 1))
    clearInterval(interval)
    }
}

nextBtn.addEventListener(`click`, nextBtnhandler)