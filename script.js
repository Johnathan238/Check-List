'use strict';

const body = document.querySelector('body')
const modal = document.querySelector('.modal')
const overlay = document.querySelector('.overlay')
const btnCloseModal = document.querySelector('.close-modal')
const btnsSHowModal = document.querySelectorAll('.show-modal')
let allI = document.getElementById("1")
console.log(allI);

// let doStuff = function getElementsById(allI) {
//     let idList = allI.split(" ");
//     let results = [], item;
//     for (let i = 0; i < idList.length; i++) {
//         item = document.getElementById(idList[i]);
//         if (item) {
//             results.push(item);
//         }
//     }
//     return(results);
// }

// doStuff((allI));
// console.log("🚀 ~ file: script.js ~ line 22 ~", doStuff(getElementsById("1 2 3 4")))

// #NOTE Calling all inputs
const i1 = document.querySelector('.input-box1')
const i2 = document.querySelector('.input-box2')
const i3 = document.querySelector('.input-box3')
const i4 = document.querySelector('.input-box4')

// #NOTE When inputs clicked background turns green
i1.addEventListener('click', () => {
  body.style.backgroundColor = '#83D475'
})

i2.addEventListener('click', () => {
  body.style.backgroundColor = '#83D475'
})

i3.addEventListener('click', () => {
  body.style.backgroundColor = '#83D475'
})

i4.addEventListener('click', () => {
  body.style.backgroundColor = '#83D475'
})

allI.addEventListener('click', () => {
  console.log(`I'M Working`);
  body.style.backgroundColor = '#83D475'
})
  


console.log("🚀 ~ file: script.js ~ line 19 ~ document.getElementById ~ document.getElementById('i')", document.querySelectorAll('.input-box'))

const openModal = () => {
  modal.classList.remove('hidden')
  overlay.classList.remove('hidden')
  document.querySelector('body').style.backgroundColor = '#77d183'
}

const closeModalFam = () => {
  modal.classList.add('hidden')
  overlay.classList.add('hidden')
  document.querySelector('body').style.backgroundColor = '#DC143C'
}

// #NOTE When inputs clicked Modal pops up
i1.addEventListener('click', openModal)
i2.addEventListener('click', openModal)
i3.addEventListener('click', openModal)
i4.addEventListener('click', openModal)

for (let i = 0; i < btnsSHowModal.length; i++) {
  btnsSHowModal[i].addEventListener('click', openModal)
}

btnCloseModal.addEventListener('click', closeModalFam)

overlay.addEventListener('click', closeModalFam)

document.addEventListener('keydown', (e) => {
  console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModalFam()
  }
})