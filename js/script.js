// scroll to top

const scrolltp = document.querySelector('#scroll');

scrolltp.addEventListener('click', function () {
   
    window.scrollTo({
top:0,
left:0,
behavior:'smooth'
    });
});

window.addEventListener('scroll', function () {
   
    if (window.scrollY > 390) {
        scrolltp.style.opacity = 1;
    } else {
        scrolltp.style.opacity = 0;        
    }
});


//scroll to navbar

window.addEventListener('scroll', function () {

    let navbar = document.querySelector('nav');

    navbar.classList.toggle('nav-active', window.scrollY > 250)
})

//responsive nabvar

document.querySelector('.menu_btn').addEventListener('click', function () {
    document.querySelector('header').classList.toggle('close')
})
