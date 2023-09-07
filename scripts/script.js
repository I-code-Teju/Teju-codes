const toggler = document.getElementById('menu-icon');
const navList = document.querySelector('.nav-list');

toggler.addEventListener('click', () => {
    navList.classList.toggle('show');
});
