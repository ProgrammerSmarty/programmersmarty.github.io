function lines()
{
    let sizeW = Math.random() * 12
    let duration = Math.random() * 3
    let e = document.createElement('div')

    e.setAttribute('class', 'line')
    document.body.appendChild(e)

    e.style.width = 2 + sizeW + 'px'
    e.style.left = Math.random() * + innerWidth + 'px';
    e.style.animationDuration = 2 + duration + 's'

    setTimeout(() => {
        document.body.removeChild(e)
    }, 5000)
}

setInterval(() => {
    lines();
}, 200);