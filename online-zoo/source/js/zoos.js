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
  })

})();
