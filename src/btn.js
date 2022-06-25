export const initBurgerButton = () => {
        document.querySelector('.menu-btn').addEventListener('click', function(){
        const c = document.querySelector('#content').classList;
        c.toggle('is-active');
        const menu = document.querySelector('.menu').classList;
        menu.toggle("menu-display")
        })
}