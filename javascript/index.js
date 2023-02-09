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

cart.addEventListener('click', () => {
    modalCart.classList.toggle('open');
});

/*const bodyMain = document.querySelector('.mainXbox');
 document.addEventListener('click', () => {
    //console.log(modalCart.classList.contains('open'));
    if (modalCart.classList.contains('open') === true) {
        modalCart.classList.replace('open', 'hide');
        console.log("Es verdad");
    }
}); */
//Fin Despliegue modal Cart


//Inicio Agregar productos al carrito
let infoProduct = document.querySelector('.modal_cart_checkout-fullBtn');
let cartEmpty = document.querySelector('.modal_cart_checkout-empty');
let infoProductPrice = document.querySelector('.cart_modal_price');
let cartNotif = document.querySelector('.cart_notif--notification');
let cont = 0;
let total = 0;

const addToCartFunction = (juegoId, carrito) => {
    cont += 1;
    const productSelect = arryProductos.find(juego => juego.id === juegoId);
    infoProduct.style.display = 'block';
    total += productSelect.precio;
    if (carrito.includes(productSelect)) {
        productSelect.cantidad += 1;
        //console.log(productSelect.cantidad);
    } else {
        carrito.push(productSelect);
    }
    infoProduct.innerHTML = 
    `    
        <p class="cart_modal_price">Total de ${cont} prodcutos: $${total}</p>
        <button class="modal_cart_button_checkout">Comprar</button>
    `;
    //console.log(carrito);
}

const showCartFunction = () => {
    let productosCarrito = document.querySelector('.modal_cart_checkout-full');
    productosCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('modal_cart_details');
        let cantidadP;
        if (producto.cantidad <= 1) {
            cantidadP = `<p class="cart_modal_price">$${producto.precio}</p>`
        } else {
            cantidadP = `<p class="cart_modal_price">$${producto.precio} x 
                <select name="cantidad" id="cantidad">
                    <option value="1">${producto.cantidad}</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
            </select>.
            <span>$${producto.precio * producto.cantidad}.00</span></p>`
        }
        div.innerHTML =
            `
                <img class="modal_cart_img" src="${producto.imagen}" alt="">
                <div class="modal_cart_info">
                    <p class="cart_modal_product">${producto.titulo}</p>
                    ${cantidadP}
                </div>
                <i class="modal_cart_button_delete fa-solid fa-trash" id="delete${producto.id}"></i>    
            `
        productosCarrito.append(div);
        const deletBtn = document.querySelector(`#delete${producto.id}`);
        deletBtn.addEventListener('click', () => {
            showCartFunction();
            //console.log(carrito);
            if (carrito.length == 0) {
                cartEmpty.style.display = 'block';
                cartNotif.style.display = 'none';
                infoProduct.style.display = 'none';
            }
        })
    });
}
//Fin Agregar productos al carrito

