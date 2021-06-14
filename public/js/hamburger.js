// alert("coucou")
let burger = document.querySelector('.burger');
let menuList = document.querySelector('.menu_list');
let menu1 = document.querySelector('.menu_list');
let nav = document.querySelector('.navbar')

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menuList.classList.toggle('hidden');
});

// au scroll, la div.entete devient transparente
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        nav.classList.add('scroll');
    } else {
        nav.classList.remove('scroll');
    }

})
