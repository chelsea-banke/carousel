let slides = document.querySelectorAll('.slide')
let len = slides.length
let current = len-1

slides.forEach(slide => {
    slide.setAttribute('id', current)
    current--
})
current = 0

document.getElementById('l-btn').addEventListener('click', ()=>{
    slides.forEach(slide => {
        slide.classList.remove('l-in', 'l-out', 'r-in', 'r-out')
    })
    document.getElementById(current).classList.add('l-out')
    if (current == 0){current=(len-1)}
    else{current = (current-1) % len}
    document.getElementById(current).classList.add('l-in')
    document.getElementById('count').textContent = current+1;
})
document.getElementById('r-btn').addEventListener('click', ()=>{
    slides.forEach(slide => {
        slide.classList.remove('l-in', 'l-out', 'r-in', 'r-out')
    })
    document.getElementById(current).classList.add('r-out')
    current = (current+1) % len
    document.getElementById(current).classList.add('r-in')
    document.getElementById('count').textContent = current+1;
})