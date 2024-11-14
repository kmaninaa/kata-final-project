import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

function initializeSwiper() {
  if (window.innerWidth < 768) {
      if (!window.swiper) {
          window.swiper = new Swiper('.swiper', {
              modules: [Pagination],
              slidesPerView: 'auto',
              slidesPerGroup: 1,
              spaceBetween: 16,
              freeMode: false,
              pagination: {
                  el: '.swiper-pagination',
                  clickable: true,
              },
              loop: true,
          });
      }
  } else {
      if (window.swiper) {
          window.swiper.destroy();
          window.swiper = undefined;
      }
  }
}

window.addEventListener('resize', initializeSwiper);
document.addEventListener('DOMContentLoaded', initializeSwiper);

let buttonBurgerMenu = document.querySelector('.burger-menu-button');
let burgerMenu = document.querySelector('.burger-menu');
let buttonBurgerMenuClose = document.querySelector('.burger-menu__button--close')
let blurContainer = document.querySelector('.container--blur');

let callButtons = document.querySelectorAll('.call-button');
let callMenu = document.querySelector('.call-menu');
let callButtonClose = document.querySelector('.call-button--close');

let chatButtons = document.querySelectorAll('.chat-button');
let chatMenu = document.querySelector('.chat-menu');
let chatButtonClose = document.querySelector('.chat-button--close');

let buttonMore = document.querySelector('.button-more');
let textMore = document.querySelectorAll('.paragraph');
let textContainer = document.querySelector('.text-container')

let buttonShow = document.querySelector('.button--show');
let buttonShow1 = document.querySelector('.button--show1');
let menuContainerBrands = document.querySelector('.menu-container-brands')

let buttonHide = document.querySelector('.button--hide');
let buttonHide1 = document.querySelector('.button--hide1');
let menuContainerTypes = document.querySelector('.menu-container-types')
let itemsTypes = document.querySelectorAll('.menu-item--types');
let itemsBrands = document.querySelectorAll('.menu-item--brands')


buttonBurgerMenu.addEventListener('click', function() {
      burgerMenu.classList.add('burger-menu--on');
      blurContainer.classList.add('container--blur-on')
});

buttonBurgerMenuClose.addEventListener('click', function() {
  burgerMenu.classList.remove('burger-menu--on');
  blurContainer.classList.remove('container--blur-on');
});

burgerMenu.addEventListener('click', function(event) {
  if(event.target.classList.contains("burger-menu--on")) {
    burgerMenu.classList.remove('burger-menu--on')
    blurContainer.classList.remove('container--blur-on')
  }
})

buttonMore.addEventListener('click', function() {
  textContainer.classList.toggle('text-container-more');
  textContainer.classList.toggle('text-container')
});

  buttonShow.addEventListener('click', function() {
    buttonShow.classList.add('hidden');
    buttonHide.classList.remove('hidden');
    menuContainerBrands.classList.add('menu-container-more')
  });

  buttonHide.addEventListener('click', function() {
    buttonShow.classList.remove('hidden');
    buttonHide.classList.add('hidden');
    menuContainerBrands.classList.remove('menu-container-more')
  });

  buttonShow1.addEventListener('click', function() {
    buttonShow1.classList.add('hidden');
    buttonHide1.classList.remove('hidden')
    menuContainerTypes.classList.add('menu-container-types-more')
  });

  buttonHide1.addEventListener('click', function() {
    buttonShow1.classList.remove('hidden');
    buttonHide1.classList.add('hidden')
    menuContainerTypes.classList.remove('menu-container-types-more')
  });

  callButtons.forEach(callButton => {
    callButton.addEventListener('click', function() {
      callMenu.classList.add('call-menu--on');
      blurContainer.classList.add('container--blur-on')
    })
  });

  callButtonClose.addEventListener('click', function() {

    if (burgerMenu.classList.contains('burger-menu--on')) {
      callMenu.classList.remove('call-menu--on');
    }
    else {
      callMenu.classList.remove('call-menu--on');
      blurContainer.classList.remove('container--blur-on')
    }

  });

  callMenu.addEventListener('click', function(event) {
    if(event.target.classList.contains("call-menu--on")) {
      callMenu.classList.remove('call-menu--on')
      blurContainer.classList.remove('container--blur-on')
    }
  });

  chatButtons.forEach(chatButton => {
    chatButton.addEventListener('click', function() {
      chatMenu.classList.add('chat-menu--on');
      blurContainer.classList.add('container--blur-on')
    })
  });

  chatButtonClose.addEventListener('click', function() {

    if (burgerMenu.classList.contains('burger-menu--on')) {
      chatMenu.classList.remove('chat-menu--on');
    }
    else {
      chatMenu.classList.remove('chat-menu--on');
      blurContainer.classList.remove('container--blur-on')
    }
  });

  chatMenu.addEventListener('click', function(event) {
    if(event.target.classList.contains("chat-menu--on")) {
      chatMenu.classList.remove('chat-menu--on')
      blurContainer.classList.remove('container--blur-on')
    }
  })





