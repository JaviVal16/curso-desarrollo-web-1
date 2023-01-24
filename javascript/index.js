let bars = document.querySelector('#menuH');
let navbar = document.querySelector('.navbar');

bars.onclick = () => {
    bars.classList.toggle('fa-xmark');
    navbar.classList.toggle('open');
}