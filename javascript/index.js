

//Inicio Despliegue menu hamburguesa
let bars = document.querySelector('#menuH');
let navbar = document.querySelector('.navbar');

bars.onclick = () => {
    bars.classList.toggle('fa-xmark');
    navbar.classList.toggle('open');
}

//Fin Despliegue menu hamburguesa

//Inicio Despliegue modal Cart
let cart = document.querySelector('#cart');
let modalCart = document.querySelector('.modal_cart');

cart.onclick = () => {
    modalCart.classList.toggle('open');
}
//Fin Despliegue modal Cart

//Inicio Agregar productos al carrito
let cont = 0;
const addToCartBtn = document.querySelector('#ToPr');
let cartNotif = document.querySelector('.cart_notif--notification');

addToCartBtn.onclick = () => {
    cont += 1;
    cartNotif.innerHTML = cont;
    //console.log(cartNotif);
    cartNotif.style.display = 'block';
    infoProductPrice.innerHTML = `$123 x${cont} <span>$${cont * 123}.00</span>`;
    infoProduct.style.display = 'block';
    cartEmpty.style.display = 'none';       
};
//Fin Agregar productos al carrito

//Inicio Modal carrito Productos
let infoProductPrice = document.querySelector('.cart_modal_price');


//Fin Modal carrito Productos

//Inicio Modal carrito Boton de borrar
const deletBtn = document.querySelector('.modal_cart_button_delete');
let infoProduct = document.querySelector('.modal_cart_checkout-full');
let cartEmpty = document.querySelector('.modal_cart_checkout-empty');
deletBtn.onclick = () => {
    cartNotif.style.display = 'none';
    cartEmpty.style.display = 'block';
    infoProduct.style.display = 'none';
    cont = 0;
}