const scrollRevealOption = {
    distance: '50px',
    origin: 'bottom',
    duration: 1000,
}

//header container
ScrollReveal().reveal('.header_container h1', scrollRevealOption);

ScrollReveal().reveal('.header_container h4', {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal('.header_container .btn', {
    ...scrollRevealOption,
    delay: 1000,
});

//Antropometri container
ScrollReveal().reveal('.Antropometri_container .section_header', scrollRevealOption);

ScrollReveal().reveal('.Antropometri_container .section_subheader', {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal('.Antropometri_container .Antropometri_flex', {
    ...scrollRevealOption,
    delay: 1000,
});

ScrollReveal().reveal('.Antropometri_container .btn', {
    ...scrollRevealOption,
    delay: 1500,
});

//gizi container 
ScrollReveal().reveal('.gizi_card', {
    ...scrollRevealOption,
    interval: 500,
});

ScrollReveal().reveal('.gizi_card_content', {
    ...scrollRevealOption,
    interval: 500,
    delay: 200,
});

// blog container
ScrollReveal().reveal('.blogs_card', {
    duration: 1000,
    interval: 400,
});

// news container
ScrollReveal().reveal('.news_card', {
    ...scrollRevealOption,
    interval: 400,
});

const navbar = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('nav_scroll', window.scrollY > 0);
});