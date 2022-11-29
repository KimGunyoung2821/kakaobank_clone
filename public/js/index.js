let slide = document.querySelector(`#slide`)
let sliding = document.querySelectorAll(`#slide li`)


let index=0
let interval = setInterval(slides , 1000)

function slides (n){
    if (index ===3) index = 0

    slide.setAttribute(`class`,`on`+(index+1))
    index++
}
console.log(interval)