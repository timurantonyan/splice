
document.getElementById('burger-toggle').addEventListener('change', function() {
    const navMenu = document.querySelector('.nav__list');
    if (this.checked) {
        navMenu.classList.add('nav__list--open');
    } else {
        navMenu.classList.remove('nav__list--open');
    }
});

const header = document.querySelector('.header__navigation');
const stickyOffset = header.offsetTop;

window.addEventListener('scroll', () => {
    if (window.scrollY > stickyOffset) {
        header.classList.add('.sticky');
    } else {
        header.classList.remove('.sticky');
    }
});
