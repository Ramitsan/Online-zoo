'use strict';

(function() {

  const SCALE_MIN = 100;
  const SCALE_MAX = 200;
  const SCALE_STEP = 25;
  const SCALE_START = 100;

  let currentScale = SCALE_START;

  const btnMinus = document.querySelector('.map__btn--minus');
  const btnPlus = document.querySelector('.map__btn--plus');
  const mapContainerElement = document.querySelector('.map__container');

  const setImgScale = (scale) => {
    mapContainerElement.style.transform = `scale(${scale / SCALE_START})`;
    currentScale = scale;
  };

  btnMinus.addEventListener('click', () => {
    let nextScale = currentScale - SCALE_STEP;
    if (nextScale >= SCALE_MIN) {
      setImgScale(nextScale);
    }
  });
  btnPlus.addEventListener('click', () => {
    let nextScale = currentScale + SCALE_STEP;
    if (nextScale <= SCALE_MAX) {
      setImgScale(nextScale);
    }
  });

  window.scaleIndicatorDefault = () => {
    setImgScale(SCALE_START);
  };
})();