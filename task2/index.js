const body = document.body;
const hamburger = document.querySelector('.hamburger');
const navlist = document.querySelector('nav ul');

hamburger.addEventListener('click', ()=> {
    hamburger.classList.toggle('active');
    navlist.classList.toggle('active');
})
