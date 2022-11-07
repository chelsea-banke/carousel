let len = 6
let current = 0
for (let i=len-1; i>=0; i--){
    let elm = document.createElement('div')
    let img = document.createElement('img')
    img.setAttribute('src', './slides/img'+i+'.jpg')
    elm.setAttribute('id', i)
    elm.appendChild(img)
    elm.classList.add('slide')
    document.getElementById('main').appendChild(elm);
}

document.getElementById('l-btn').addEventListener('click', ()=>{
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('l-in', 'l-out', 'r-in', 'r-out')
    })
    document.getElementById(current).classList.add('l-out')
    if (current == 0){current=(len-1)}
    else{current = (current-1) % len}
    document.getElementById(current).classList.add('l-in')
    document.getElementById('count').textContent = current+1;
})
document.getElementById('r-btn').addEventListener('click', ()=>{
    document.querySelectorAll('.slide').forEach(slide => {
        slide.classList.remove('l-in', 'l-out', 'r-in', 'r-out')
    })
    document.getElementById(current).classList.add('r-out')
    current = (current+1) % len
    document.getElementById(current).classList.add('r-in')
    document.getElementById('count').textContent = current+1;
})