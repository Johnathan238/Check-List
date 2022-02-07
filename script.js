'use strict';

const body = document.querySelector('body')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsSHowModal = document.querySelectorAll('.show-modal')
const i1 = document.querySelector('.input-box1')
const i2 = document.querySelector('.input-box2')
const i3 = document.querySelector('.input-box3')
const i4 = document.querySelector('.input-box4')
// console.log("🚀 ~ file: script.js ~ line 9 ~ allI", allI)
// console.log(allI);

// const btnCheck = document.querySelector('.Check-BT')
// const addItem = document.getElementById('add-todo')

// var allI = document.querySelector('.input-box1').addEventListener('click', function(){
//   body.style.backgroundColor = '#83D475'
//   openModal
// })

i1.addEventListener('click', function () {
  body.style.backgroundColor = '#83D475'
})

i2.addEventListener('click', function () {
  body.style.backgroundColor = '#83D475'
})

i3.addEventListener('click', function () {
  body.style.backgroundColor = '#83D475'
})

i4.addEventListener('click', function () {
  body.style.backgroundColor = '#83D475'
})

i1.addEventListener('click', openModal)
i2.addEventListener('click', openModal)
i3.addEventListener('click', openModal)
i4.addEventListener('click', openModal)

console.log("🚀 ~ file: script.js ~ line 19 ~ document.getElementById ~ document.getElementById('i')", document.querySelectorAll('.input-box'))

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