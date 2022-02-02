'use strict';

const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsSHowModal = document.querySelectorAll('.show-modal')
const input1 = document.getElementById('1')
const input2 = document.getElementById('2')
const input3 = document.getElementById('3')
const input4 = document.getElementById('4')
const btnCheck = document.querySelector('.Check-BT')
const checkSquare = document.getElementById('squaredFour')

document.getElementById('1').addEventListener('click', function (){
  console.log('====================================');
  console.log(1);
  console.log('====================================');
  document.querySelector('body').style.backgroundColor = '#83D475'
})

const openModal = function () {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
  document.querySelector('body').style.backgroundColor = '#77d183'
}

const closeModalFam = function () {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
  // document.querySelector('body').style.backgroundColor = '#DC143C'
}

checkSquare.addEventListener('click', openModal)
btnCheck.addEventListener('click', openModal)

for (let i = 0; i < btnsSHowModal.length; i++) {
  btnsSHowModal[i].addEventListener('click', openModal)
}

btnCloseModal.addEventListener('click', closeModalFam)

overlay.addEventListener('click', closeModalFam)

document.addEventListener('keydown', function (e) {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalFam()
  }
})