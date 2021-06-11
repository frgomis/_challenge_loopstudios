// alert("coucou")
let btnHamburger = document.querySelector('.menuBurger');
let btnClosed = document.querySelector('.icon');

console.log(btnHamburger, btnClosed);
btnHamburger.addEventListener('click', ()=>{
    document.getElementById("sidebarMobil").classList.toggle("active");
});
btnClosed.addEventListener('click', ()=>{
    document.getElementById('sidebarMobil').classList.toggle("active");
});