const navBarLinks = document.querySelector('.navbar-links');
const hamburgerButton = document.querySelector('.hamburger-button');

hamburgerButton.addEventListener('click', () => {
    navBarLinks.classList.toggle('active')
})