let burger_menu = function(){
    const burgerBtn = document.getElementById('menuBtn');
    const menu = document.getElementById('menu');
    burgerBtn.addEventListener('click', function (e) {
        menu.classList.toggle('active');
        burgerBtn.classList.toggle('active');
    });
}
burger_menu();

