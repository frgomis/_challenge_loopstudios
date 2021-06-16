// alert("coucou")
let burger = document.querySelector('.burger');
let menuList = document.querySelector('.menu_list');
let nav = document.querySelector('.navbar');
let windowX = window.innerWidth;
console.log(windowX);


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
// au delà de 769px, la ul.menu_list se met en display: flex 

window.addEventListener('onresize', () => {
    if (window.onresize > 769) {
        burger.classList.toggle('hidden');
        menuList.classList.toggle('hidden');
    }
});