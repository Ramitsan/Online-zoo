'use strict';

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

(function() {
  // слайдер в блоке Pets
  const petsListsElements = document.querySelectorAll('.pets__list');
  const btnLeft = document.querySelector('.pets__button--left');
  const btnRight = document.querySelector('.pets__button--right');
  let currentItem = 0;
  let isEnabled = true;

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
  });

  // слайдер в блоке Testimonials
  const gap = 32;
  const testimonialsCarousel = document.querySelector('.testimonials__carousel');
  const testimonialsList = document.querySelector('.testimonials__list');
  const testimonialsControls = document.querySelector('.testimonials__controls');
  const testimonialsCountRange = document.querySelector('#testimonials-count');

  let slideIndex = 0;
  testimonialsCountRange.value = 0;

  let width = testimonialsCarousel.offsetWidth;
  let cardWidth = document.querySelector('.testimonial-card').offsetWidth;

  window.addEventListener('resize', (e) => {
    width = testimonialsCarousel.offsetWidth;
    cardWidth = document.querySelector('.testimonial-card').offsetWidth;
  });

  const slideFunc = () => {
    slideIndex += 1;
    if (slideIndex >= 8) {
      slideIndex = 0;
    }

    testimonialsList.scrollTo((cardWidth + gap) * slideIndex, 0);
    testimonialsCountRange.value = slideIndex;
  };

  let autoSlideInterval = setInterval(slideFunc, 10000);
  let autoSlideTimeout = null;

  const delayAutoSliding = () => {
    clearTimeout(autoSlideTimeout);
    clearInterval(autoSlideInterval);
    autoSlideInterval = null;

    autoSlideTimeout = setTimeout(() => {
      clearInterval(autoSlideInterval);
      autoSlideInterval = setInterval(slideFunc, 10000);
    }, 40000);
  };

  testimonialsList.addEventListener('click', delayAutoSliding);
})();
