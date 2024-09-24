// redirect to the index.html
const blogLogoBtn = document.getElementById('blog-logo');
blogLogoBtn.addEventListener('click', function(){
    window.location.href = './index.html';
});

const header2 = document.querySelector('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) { 
        header2.classList.add('scrolled-header');
    } else {
        header2.classList.remove('scrolled-header');
    }
});