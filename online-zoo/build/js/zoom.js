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

  // зум
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


  // переттаскивание
  const headerElement = document.getElementById('header');
  const footerElement = document.getElementById('footer');
  let topIndent = 0;
  let leftIndent = 0;

  // let topIndent = mapContainerElement.style.top;
  // let leftIndent = mapContainerElement.style.left;

  const calculateCoords = (evt) => {
    // let box = elem.getBoundingClientRect();
    topIndent = evt.pageY + pageYOffset;
    leftIndent = evt.pageX + pageXOffset;
  };

  const moveAt = (evt) => {
    mapContainerElement.style.left = evt.pageX - leftIndent + 'px';
    mapContainerElement.style.top = evt.pageY - topIndent + 'px';
  };

  const stopDrag = () => {
    document.removeEventListener('mousemove', moveAt);
    mapContainerElement.removeEventListener('mouseup', stopDrag);
  };

  // const resetMapMove = () => {
  //   mapContainerElement.style.left = leftIndent;
  //   mapContainerElement.style.top = topIndent;
  // };

  mapContainerElement.addEventListener('mousedown', (evt) => {

    calculateCoords(evt);
    moveAt(evt);
    // resetMapMove();

    document.addEventListener('mousemove', moveAt);
    mapContainerElement.addEventListener('mouseup', stopDrag);
  });


  mapContainerElement.ondragstart = function() {
    return false;
  };

  headerElement.addEventListener('mouseenter', stopDrag);
  footerElement.addEventListener('mouseenter', stopDrag);

})();