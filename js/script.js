
import tabs from './modules/tabs';
import timer from './modules/timer';
import slides from './modules/slides';
import modal from './modules/modal';
import forms from './modules/forms';
import cards from './modules/cards';
import calc from './modules/calc';
import {openModal} from './modules/modal';

window.addEventListener('DOMContentLoaded', function() {

  const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300000);

  tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
  timer('.timer', '2024-06-11');
  slides({
    container: '.offer__slider',
    nextArrow: '.offer__slider-next',
    prevArrow: '.offer__slider-prev',
    totalCounter: '#total',
    currentCounter: '#current',
    wrapper: '.offer__slider-wrapper',
    field: '.offer_slider_inner',
    slide: '.offer__slide'

  });
  modal('[data-modal]', '.modal', modalTimerId);
  forms('form', modalTimerId);
  cards();
  calc();

});







