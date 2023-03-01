const menuEmail=document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hambMenu=document.querySelector(".menu");
const mobileMenu=document.querySelector(".mobile-menu");
const myOrder=document.querySelector(".my-order")
const cartIcon=document.querySelector(".navbar-shopping-cart img")
const orderExit=document.querySelector(".title-container img")

menuEmail.addEventListener('click',toggleMenu);
hambMenu.addEventListener("click",toggleMobileMenu);
cartIcon.addEventListener("click",toggleMyOrder);
orderExit.addEventListener("click",toggleMyOrder);

function toggleMenu(){
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
}

function toggleMyOrder(){
    myOrder.classList.toggle("inactive");
}