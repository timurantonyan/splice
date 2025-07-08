
document.getElementById('burger-toggle').addEventListener('change', function() {
    const navMenu = document.querySelector('.nav__list');
    if (this.checked) {
        navMenu.classList.add('nav__list--open');
    } else {
        navMenu.classList.remove('nav__list--open');
    }
});


