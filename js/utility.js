const header = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
        header.classList.add('scrolled-header');
    } else {
        header.classList.remove('scrolled-header');
    }
});