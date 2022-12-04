const slide = document.querySelector(`.slide`) //ul
const img123 = document.querySelectorAll(`.img123`) //li
const checkcard2 = document.querySelector(`#checkcard2`)
const prevbtn = document.querySelector(`.preview`)
const nextbtn = document.querySelector(`.next`)
const pagerBtn = document.querySelectorAll(`.pager span`)

const img123Count = img123.length
let currentIndex = 0

const topbtn = document.querySelector(`.top_btn`)

topbtn.addEventListener(`click`,function(){
    window.scrollTo({top: 0, behavior:'smooth'});
})

console.log(img123.length)
for (let i = 0; i < img123.length; i++) {
    img123[i].style.left = i * 100 + `%`;
}

function gotoslide(idx) {
    slide.style.left = -100 * idx + `%`;
    currentIndex = idx

    for (let y = 0; y < pagerBtn.length; y++) {
        pagerBtn[y].classList.remove(`active`)
    }
    pagerBtn[idx].classList.add(`active`)
}

gotoslide(0)

prevbtn.addEventListener(`click`, function () {
    // currentIndex -= 1
    // gotoslide(currentIndex)

    if (currentIndex == 0) {
        gotoslide(img123Count - 1)
    } else {
        currentIndex -= 1
        gotoslide(currentIndex)
    }

})

nextbtn.addEventListener(`click`, function () {
    // currentIndex += 1
    // gotoslide(currentIndex)

    if (currentIndex == img123Count - 1) {
        gotoslide(0)
    } else {
        currentIndex += 1
        gotoslide(currentIndex)
    }
})

let interval = setInterval(function () {
    const nextIndex = (currentIndex + 1) % img123Count

    gotoslide(nextIndex)
}, 3000)



checkcard2.addEventListener(`mouseover`, function () {
    clearInterval(interval)
})

checkcard2.addEventListener(`mouseout`, function () {
    interval = setInterval(function () {
        const nextIndex = (currentIndex + 1) % img123Count

        gotoslide(nextIndex)
    }, 3000)
})

for (let i = 0; i < pagerBtn.length; i++) {
    pagerBtn[i].addEventListener(`click`, function (e) {
        console.log(e.target.innerText)
        // let pagerNum = e.target.getAttribute(`data-idx`)
        let pagerNum = e.target.innerText - 1
        gotoslide(pagerNum)


    })

}

