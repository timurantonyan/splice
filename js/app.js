import Swiper from 'swiper/bundle';
document.getElementById('burger-toggle').addEventListener('change', function() {
    const navMenu = document.querySelector('.nav__list');
    if (this.checked) {
        navMenu.classList.add('nav__list--open');
    } else {
        navMenu.classList.remove('nav__list--open');
    }
});

window.addEventListener('scroll', function() {
    const header = document.querySelector('.header__navigation');
    if (window.scrollY > 100) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
    console.log('Scroll position:', window.scrollY, 'px')
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        }
    }
});
