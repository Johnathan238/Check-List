'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsSHowModal = document.querySelectorAll('.show-modal')
document.getElementById('squaredFour').addEventListener('click', function (){
  console.log('====================================');
  console.log(check);
  console.log('====================================');
})

const openModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

const btnCheck = document.querySelector('.Check-BT')

btnCheck.addEventListener('click', openModal)
