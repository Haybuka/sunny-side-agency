const burger = document.querySelector('#burger')
const dropDown = document.querySelector('#drop-down')

burger.addEventListener('click',()=>{
    dropDown.classList.toggle('hidden')
})