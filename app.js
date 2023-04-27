window.addEventListener('scroll', ()=> {
    const navbar = document.querySelector('.navbar')
    navbar.classList.toggle('sticky', window.scrollY > 0)
});

const hamburger = document.getElementById('hamburger');
const navItem = document.getElementById('bar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navItem.classList.toggle('active');
});