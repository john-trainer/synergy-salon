"use strict";

// 関数toggleClassの定義
var menuBtnIcon = document.querySelector('.menu-btn__icon');
var drawerMenu = document.querySelector('.drawer-menu');

function toggleClass(clickTarget) {
  clickTarget.addEventListener('click', function () {
    menuBtnIcon.classList.toggle('menu-btn__icon--active');
    drawerMenu.classList.toggle('drawer-menu--active');
  }, false);
} // メニューボタンを押したときの挙動


var menuBtn = document.querySelector('#js-menu-btn');
toggleClass(menuBtn); // メニューリンクを押したときの挙動

var drawerMenuLinks = document.querySelectorAll('.drawer-menu__link');

for (var i = 0; i < drawerMenuLinks.length; i++) {
  var drawerMenuLink = drawerMenuLinks[i];
  toggleClass(drawerMenuLink);
} // スムーススクロール


var smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

var _loop = function _loop(_i) {
  smoothScrollTrigger[_i].addEventListener('click', function (e) {
    e.preventDefault();

    var href = smoothScrollTrigger[_i].getAttribute('href');

    var targetElement = document.getElementById(href.replace('#', ''));
    var rect = targetElement.getBoundingClientRect().top;
    var offset = window.pageYOffset; // windowの幅992px未満と992px以上の条件分岐

    if (window.outerWidth < 992) {
      var gapSmall = 0;
      var targetSmall = rect + offset - gapSmall;
      window.scrollTo({
        top: targetSmall,
        behavior: 'smooth'
      });
    } else {
      var gapLarge = document.querySelector('.header').clientHeight;
      var targetLarge = rect + offset - gapLarge * 2;
      window.scrollTo({
        top: targetLarge,
        behavior: 'smooth'
      });
    }
  });
};

for (var _i = 0; _i < smoothScrollTrigger.length; _i++) {
  _loop(_i);
}