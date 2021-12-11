'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsSHowModal = document.querySelectorAll('.show-modal')
const checkBox = document.getElementById("1")

checkBox.addEventListener('click', function (){
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
})
