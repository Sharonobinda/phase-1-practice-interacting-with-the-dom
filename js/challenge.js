document.addEventListener('DOMContentLoaded', () => {
    let counter = document.getElementById(`counter`)
    let plus = document.getElementById(`plus`)
    let minus = document.getElementById(`minus`)
    let heart = document.getElementById(`heart`)
    let dependCount = true
    let num = 0
    const increment = () => num++
    const decrement = () => num--

    setInterval(() => {
        if (dependCount === true) {
        counter.textContent = increment()
        }
    }, 1000)

    plus.addEventListener(`click`, () => counter.textContent = increment())
    minus.addEventListener(`click`, () => counter.textContent = decrement())

    const obj = {}
    heart.addEventListener(`click`, () => {
        let counterContent = counter.textContent
        let li = document.createElement(`li`)
        let div = document.querySelector(`.likes`)
        if (counterContent in obj) {
            let uniqueID = document.getElementById(`${counterContent}`)
            uniqueID.textContent = `${counterContent} has been liked ${obj[counterContent]++} times`
        } else {
            obj[counterContent] = 1
            div.append(li)
            li.id = counterContent
            li.textContent = `${counterContent} has been liked 1 time`
        }
    })
    
    pause.addEventListener(`click`, () => {
        const disable = (...collect) => collect.forEach(btn => btn.disabled = true)
        const enable = (...collect) => collect.forEach(btn => btn.disabled = false)
        const pause = document.getElementById(`pause`)
        dependCount = !dependCount
        if (pause.textContent === 'resume'){
            pause.textContent = ' pause '
            return enable(plus, minus, heart)
        } else if (pause.textContent === ' pause '){
            pause.textContent = 'resume'
            return disable(plus, minus, heart)
        } 
    })

    document.getElementById(`submit`).addEventListener(`click`, (e) => {
        e.preventDefault()
        let input = document.getElementById(`comment-input`).value
        let p = document.createElement(`p`)
        p.textContent = input
        document.getElementById(`list`).appendChild(p)
        document.getElementById(`comment-form`).reset()
    })
})
