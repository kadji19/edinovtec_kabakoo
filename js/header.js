
const hambugerIcon = document.getElementById('hambuger_icon')
const menu = document.getElementById('menu')
const icons = document.getElementById('icons')

const btn = document.createElement("button")
btn.classList.add("btn_croi")
const croi = document.createElement("i")
croi.classList.add("bx","bx-x")







hambugerIcon.addEventListener('click', ()=>{
    menu.classList.add("active")
    icons.classList.add("active_icons")
    btn.appendChild(croi)
    menu.appendChild(btn)
    menu.appendChild(icons)
})

croi.addEventListener('click', ()=>{
    menu.classList.remove('active')

})