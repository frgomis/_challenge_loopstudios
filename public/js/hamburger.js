// alert("coucou")
let nav = document.querySelector('.navbar');
let burger = document.querySelector('.burger');
let menuList = document.querySelector('.menu_list');
let menuDesktop = document.querySelector('#desktop')
let windowX = window.innerWidth;
console.log(windowX);
console.log(menuDesktop);


burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menuList.classList.toggle('hidden');
});

// au scroll, la div.entete devient transparente
window.addEventListener('scroll', () => {
    if (window.scrollY > 150){
        nav.classList.toggle('disparait');
    } else {
        nav.classList.remove('disparait');
    }

});

