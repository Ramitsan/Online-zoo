'use strict';

(function() {
  const mainVideo = document.querySelector('.animal-page__iframe');
  const previewsCollection = document.querySelectorAll('.watch-online__video');

  // на iframe не срабатывает событие click, поэтому навешиваем клик на родителя
  previewsCollection.forEach(item => {
    item.addEventListener('click', function() {
      const iframe = item.querySelector('.watch-online__iframe');
      let currentUrl = mainVideo.src;
      mainVideo.src = iframe.src;
      iframe.src = currentUrl;
    })
  });

  // карусель превью видео
  const gap = 300; // ширина превью + отступ справа

  const carousel = document.querySelector('.watch-online__frame-box'),
    content = document.querySelector('.watch-online__previews'),
    buttonRight = document.querySelector('.watch-online__button--right'),
    buttonLeft = document.querySelector('.watch-online__button--left');

  buttonRight.addEventListener("click", () => {
    carousel.scrollBy(gap, 0);
    if (carousel.scrollWidth !== 0) {
      buttonLeft.style.opacity = 1;
    }
    if (content.scrollWidth - gap <= carousel.scrollLeft + width) {
      buttonRight.style.opacity = 0.5;
    }
  });
  buttonLeft.addEventListener("click", () => {
    carousel.scrollBy(-(gap), 0);
    if (carousel.scrollLeft - gap <= 0) {
      buttonLeft.style.opacity = 0.5;
    }
    if (!content.scrollWidth - gap <= carousel.scrollLeft + width) {
      buttonRight.style.opacity = 1;
    }
  });

  let width = carousel.offsetWidth;
  window.addEventListener("resize", () => (width = carousel.offsetWidth));

})();
