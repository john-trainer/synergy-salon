// 関数toggleClassの定義
const menuBtnIcon = document.querySelector('.menu-btn__icon');
const drawerMenu = document.querySelector('.drawer-menu');
function toggleClass(clickTarget) {
    clickTarget.addEventListener(
        'click',
        () => {
            menuBtnIcon.classList.toggle('menu-btn__icon--active');
            drawerMenu.classList.toggle('drawer-menu--active');
        },
        false
    );
}

// メニューボタンを押したときの挙動
const menuBtn = document.querySelector('#js-menu-btn');
toggleClass(menuBtn);

// メニューリンクを押したときの挙動
const drawerMenuLinks = document.querySelectorAll('.drawer-menu__link');
for (let i = 0; i < drawerMenuLinks.length; i++) {
    const drawerMenuLink = drawerMenuLinks[i];
    toggleClass(drawerMenuLink);
}

// スムーススクロール
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');
for (let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {
        e.preventDefault();
        let href = smoothScrollTrigger[i].getAttribute('href');
        let targetElement = document.getElementById(href.replace('#', ''));
        const rect = targetElement.getBoundingClientRect().top;
        const offset = window.pageYOffset;
        // windowの幅992px未満と992px以上の条件分岐
        if (window.outerWidth < 992) {
            const gapSmall = 0;
            const targetSmall = rect + offset - gapSmall;
            window.scrollTo({
                top: targetSmall,
                behavior: 'smooth',
            });
        } else {
            const gapLarge = document.querySelector('.header').clientHeight;
            const targetLarge = rect + offset - gapLarge * 2;
            window.scrollTo({
                top: targetLarge,
                behavior: 'smooth',
            });
        }
    });
}
