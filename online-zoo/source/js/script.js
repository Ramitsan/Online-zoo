// var pageHeader = document.querySelector('.page-header');
// var headerToggle = document.querySelector('.page-header__toggle');

// pageHeader.classList.remove('page-header--nojs');

// headerToggle.addEventListener('click', function () {
//   if (pageHeader.classList.contains('page-header--closed')) {
//     pageHeader.classList.remove('page-header--closed');
//     pageHeader.classList.add('page-header--opened');
//   } else {
//     pageHeader.classList.add('page-header--closed');
//     pageHeader.classList.remove('page-header--opened');
//   }
// });


let petsListsElements = document.querySelectorAll('.pets__list');
let currentItem = 0;
let isEnabled = true;
let btnLeft = document.querySelector('.pets__button--left');
let btnRight = document.querySelector('.pets__button--right');

function changeCurrentItem(n) {
  currentItem = (n + petsListsElements.length) % petsListsElements.length;
}

function hideItem(direction) {
  isEnabled = false;
  petsListsElements[currentItem].classList.add(direction);
  petsListsElements[currentItem].addEventListener('animationend', function() {
    this.classList.remove('pets__list--active', direction);
  })
}

function showItem(direction) {
  petsListsElements[currentItem].classList.add('pets__list--next', direction);
  petsListsElements[currentItem].addEventListener('animationend', function() {
    this.classList.remove('pets__list--next', direction);
    this.classList.add('pets__list--active');
    isEnabled = true;
  })
}

function previosItem(n) {
  hideItem('to-right');
  changeCurrentItem(n - 1);
  showItem('from-left');
}

function nextItem(n) {
  hideItem('to-left');
  changeCurrentItem(n + 1);
  showItem('from-right');
}


btnLeft.addEventListener('click', function() {
  if (isEnabled) {
    previosItem(currentItem);
  }
})

btnRight.addEventListener('click', function() {
  if (isEnabled) {
    nextItem(currentItem);
  }
})
