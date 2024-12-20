const slideBar = document.querySelector('.side-bar')
const arrow = document.querySelector('.arrow')
const menuBar = document.querySelector('#menu-bar')
const body = document.querySelector('.body')
const main = document.querySelector('.main')

menuBar.addEventListener('click', ()=>{
    slideBar.classList.add('open')
    
})

arrow.addEventListener('click', ()=>{
    slideBar.classList.remove('open')
})

menuBar.addEventListener('click', ()=>{
    body.classList.add('open')
    
})

arrow.addEventListener('click', ()=>{
    body.classList.remove('open')
    
})


menuBar.addEventListener('click', ()=>{
    main.classList.add('open')
    
})
main.addEventListener('click', ()=>{
   slideBar.classList.remove('open')
    
})

main.addEventListener('click', ()=>{
    body.classList.remove('open')
    
})



