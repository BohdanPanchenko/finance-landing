const burgerBtn = document.querySelector('.burger');
const navBar = document.querySelector('.menu');

burgerBtn.addEventListener('click', (e) => {

    if (navBar.classList.contains('menu_active')) {
        navBar.classList.add('menu_out');
        setTimeout(() => {
            navBar.classList.remove('menu_out');
            navBar.classList.toggle('menu_active');
        }, 400)
    } else {

        navBar.classList.toggle('menu_active');
    }

    burgerBtn.classList.toggle('burger_active');
})





const colorScheme = document.querySelector('.header__color-scheme');
colorScheme.addEventListener('click', (e) => {
    document.body.classList.toggle('light');
    colorScheme.classList.toggle('light');

})