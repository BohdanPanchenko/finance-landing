const burgerBtn = document.querySelector('.burger');
const navBar = document.querySelector('.menu');

burgerBtn.addEventListener('click', (e) => {

    burgerBtn.classList.toggle('burger_active');
    navBar.classList.toggle('menu_active');
})


// const ratingStars = [];

// const ratingStars = document.querySelectorAll('.feedback-item__star:hover');

// ratingStars[0].style.display = 'none';