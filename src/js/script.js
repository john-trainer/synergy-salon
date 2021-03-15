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

// スクロール連動
const sections = document.querySelectorAll('.sec');

const options = {
    root: null,
    rootMargin: '-50% 0px',
    threshold: 0,
};
const observer = new IntersectionObserver(doWhenIntersect, options);
sections.forEach((section) => {
    observer.observe(section);
});

function doWhenIntersect(entries) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            activateIndex(entry.target);
        }
    });
}

function activateIndex(element) {
    const currentActiveIndex = document.querySelector(
        '#js-global-nav__items .active'
    );
    if (currentActiveIndex !== null) {
        currentActiveIndex.classList.remove('active');
    }
    const newActiveIndex = document.querySelector(
        `.global-nav__link[href='#${element.id}']`
    );
    newActiveIndex.classList.add('active');
}
