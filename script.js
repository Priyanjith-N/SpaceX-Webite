const hamburger = document.querySelector('.hamburger');
const mobileNavigation = document.querySelector('.mobile-navigation')
const shadow = document.querySelector('.shadow');
const largeScreenNavigation = document.querySelector('.largescreen-navigation');

hamburger.addEventListener('click',() =>{
    console.log('hello');
    hamburger.classList.toggle('active');
    mobileNavigation.classList.toggle('active');
    largeScreenNavigation.classList.toggle('active');
    shadow.classList.toggle('active');
});
shadow.addEventListener('click',() =>{
    hamburger.classList.remove('active');
    mobileNavigation.classList.remove('active');
    largeScreenNavigation.classList.remove('active');
    shadow.classList.remove('active');
})