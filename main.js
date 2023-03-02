const menuEmail=document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hambMenu=document.querySelector(".menu");
const mobileMenu=document.querySelector(".mobile-menu");
const myOrder=document.querySelector(".my-order");
const cartIcon=document.querySelector(".navbar-shopping-cart");
const orderExit=document.querySelector(".title-container img");
const cardsContainer=document.querySelector(".cards-container");

menuEmail.addEventListener('click',toggleMenu);
hambMenu.addEventListener("click",toggleMobileMenu);
cartIcon.addEventListener("click",toggleMyOrder);
orderExit.addEventListener("click",toggleMyOrder);

function toggleMenu(){
    desktopMenu.classList.toggle("inactive");
    if (!myOrder.classList.contains("inactive")){
        myOrder.classList.toggle("inactive");
    }
}

function toggleMobileMenu(){
    mobileMenu.classList.toggle("inactive");
    if (!myOrder.classList.contains("inactive")){
        myOrder.classList.toggle("inactive");
    }
}

function toggleMyOrder(){
    myOrder.classList.toggle("inactive");
    if (!mobileMenu.classList.contains("inactive")){
        mobileMenu.classList.toggle("inactive");
    }
    if (!desktopMenu.classList.contains("inactive")){
        desktopMenu.classList.toggle("inactive");
    }
}

const productList=[];
productList.push(
    {
        name: 'Bike',
        price: 120,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
)

productList.push(
    {
        name: 'Libro',
        price: 60,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
)

productList.push(
    {
        name: 'Escritorio',
        price: 100,
        img: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
    }
)

/*
    <div class="product-card">
        <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
        <div class="product-info">
          <div>
            <p>$120,00</p>
            <p>Bike</p>
          </div>
          <figure>
            <img src="./icons/bt_add_to_cart.svg" alt="">
          </figure>
        </div>
    </div>
*/      

function renderProducts(arr){
    for (product of arr){
            const productCard= document.createElement("div");
            productCard.classList.add('product-card');
        
            const img=document.createElement('img');
            img.setAttribute('src',product.img);
        
            const productInfo= document.createElement("div");
            productInfo.classList.add('product-info');
        
            const productInfoDiv= document.createElement("div");
        
            const productPrice=document.createElement('p');
            productPrice.innerText="$"+product.price;
        
            const productName=document.createElement('p');
            productName.innerText=product.name;
        
            const productInfoFigure=document.createElement('figure');
            const productImg=document.createElement('img');
            productImg.setAttribute('src',"./icons/bt_add_to_cart.svg");  
        
            productInfoFigure.append(productImg);
            productInfoDiv.append(productPrice,productName);
        
            productInfo.append(productInfoDiv,productInfoFigure);
        
            productCard.append(img,productInfo);
        
            cardsContainer.append(productCard);
        }
}

renderProducts(productList);
    