//Inicio Despliegue menu hamburguesa
let bars = document.querySelector('#menuH');
let navbar = document.querySelector('.navbar');

bars.addEventListener('click', () => {
    bars.classList.toggle('fa-xmark');
    navbar.classList.toggle('open');
});

//Fin Despliegue menu hamburguesa


//Inicio Despliegue modal Cart
let cart = document.querySelector('#cart');
let modalCart = document.querySelector('.modal_cart');

cart.onclick = () => {
    modalCart.classList.toggle('open');
}
//Fin Despliegue modal Cart


//Inicio Agregar productos al carrito
let infoProductPrice = document.querySelector('.cart_modal_price');
let cartNotif = document.querySelector('.cart_notif--notification');

const addToCartFunction = (juegoId, carrito) => {
    const productSelect = arryProductos.find(juego => juego.id === juegoId);
    carrito.push(productSelect);
    console.log(carrito);
}

const showCartFunction = () => {
    const productosCarrito = document.querySelector('.modal_cart_checkout-full');
    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('modal_cart_details');
        div.innerHTML = `
            <img class="modal_cart_img" src="${producto.imagen}" alt="">
            <div class="modal_cart_info">
                <p class="cart_modal_product">${producto.titulo}</p>
                <p class="cart_modal_price">$${producto.precio} x${producto.cantidad} <span>$4321.00</span></p>
            </div>
            <i class="modal_cart_button_delete fa-solid fa-trash"></i>    
    `
        productosCarrito.append(div);
        const deletBtn = document.querySelector('.modal_cart_button_delete');
        deletBtn.onclick = () => {
            cartEmpty.style.display = 'block';
            cartNotif.style.display = 'none';
            infoProduct.style.display = 'none';
        }
    });
}
//Fin Agregar productos al carrito

//Inicio Modal carrito Boton de borrar
let infoProduct = document.querySelector('.modal_cart_checkout-full');
let cartEmpty = document.querySelector('.modal_cart_checkout-empty');
