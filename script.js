const burger = document.querySelector('.burger')
const menu = document.querySelector('.menu')

burger.onclick = () => {
    menu.classList.toggle('open')
}


const openModal = document.querySelector('.open-modal')
const closeModal = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')


openModal.onclick = () => {
    modal.classList.add('oppened')
}

closeModal.onclick = () => {
    modal.classList.remove('oppened')
}