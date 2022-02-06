'use strict';

const body = document.querySelector('body')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsSHowModal = document.querySelectorAll('.show-modal')
const allI = document.querySelectorAll('.i')
console.log("🚀 ~ file: script.js ~ line 9 ~ allI", allI)
// console.log(allI);

// const btnCheck = document.querySelector('.Check-BT')
// const addItem = document.getElementById('add-todo')

// allI.addEventListener('click', function(){
//   body.style.backgroundColor = '#83D475'
// })

// let allInput = document.querySelectorAll('.i').addEventListener('click', function (){
//   console.log('====================================');
//   console.log(4);
//   console.log('====================================');
//   body.style.backgroundColor = '#83D475'
// })
// console.log(allInputs);

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

// addItem.addEventListener('click', openModal)
// btnCheck.addEventListener('click', openModal)

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