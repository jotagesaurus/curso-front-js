const menuEmail=document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");
const hambMenu=document.querySelector(".menu");
const mobileMenu=document.querySelector(".mobile-menu");
const myOrder=document.querySelector(".my-order");
const cartIcon=document.querySelector(".navbar-shopping-cart");
const orderExit=document.querySelector(".title-container img");
const cardsContainer=document.querySelector(".cards-container");
const productDetail=document.querySelector(".product-detail");
const productDetailClose=document.querySelector(".product-detail-close");

let elements=[];
elements.push(desktopMenu,mobileMenu,myOrder,productDetail);

menuEmail.addEventListener('click',toggleMenu);
hambMenu.addEventListener("click",toggleMobileMenu);
cartIcon.addEventListener("click",toggleMyOrder);
orderExit.addEventListener("click",toggleMyOrder);
productDetailClose.addEventListener("click",closeProductDetail);

function hideElements(arr,obj){
    for (element of arr){
        if(!element.classList.contains("inactive") && element!=obj){
            element.classList.add("inactive");
        }
    }
}


function toggleMenu(){
    hideElements(elements,desktopMenu);
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    hideElements(elements,mobileMenu);
    mobileMenu.classList.toggle("inactive");
}

function toggleMyOrder(){
    hideElements(elements,myOrder);
    myOrder.classList.toggle("inactive");
}

function openProductDetail(){
    hideElements(elements,productDetail);
    productDetail.classList.remove("inactive");
}

function closeProductDetail(){
    hideElements(elements,productDetail);
    productDetail.classList.add("inactive");
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

function renderProducts(arr){
    for (product of arr){
            const productCard= document.createElement("div");
            productCard.classList.add('product-card');
        
            const img=document.createElement('img');
            img.setAttribute('src',product.img);
            img.addEventListener("click",openProductDetail)
        
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


    