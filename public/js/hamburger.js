// alert("coucou")
let btnHamburger = document.querySelector('.menuBurger');
let logoMenu = document.querySelector('.logo_menu');

let btnHamburger1 = document.querySelector('.menuBurger1');
let menu1 = document.querySelector('.logo_menu1');


console.log(btnHamburger);
console.log(logoMenu);
console.log(menu1);

btnHamburger.addEventListener('click', ()=>{
    logoMenu.classList.replace('hidden', 'visible');
    menu1.classList.replace('hidden','visible');
});
btnHamburger1.addEventListener('click', ()=>{
    logoMenu.classList.replace('hidden','visible');
    menu1.classList.replace('hidden', 'visible');
});


