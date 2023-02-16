//Inicio Agregar productos al carrito
const addToCartFunction = (juegoId) => {
    const productSelect = arryProductos.find(juego => juego.id === juegoId);
    //console.log(productSelect);

    
    if (carrito.includes(productSelect)) {
        productSelect.cantidad += 1;
    } else {
        if (productosEnCarrito === null) {
            carrito.push(productSelect);
        } else {
            const index = carrito.findIndex(producto => producto.id === juegoId);
            carrito[index].cantidad += 1;
        }
    }
    localStorage.setItem("productCart", JSON.stringify(carrito))
}
//Fin Agregar productos al carrito

//Inicio Mostrar productos al carrito
const showCartFunction = () => {
    let productosCarrito = document.querySelector('.modal_cart_checkout-full');
    actualizrNotifCart();
    cartNotif.innerHTML = `${cont}`;
    infoProduct.style.display = 'block';
    cartEmpty.style.display = 'none';
    cartNotif.style.display = 'block';
    productosCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('modal_cart_details');
        let cantidadP;
        if (producto.cantidad <= 1) {
            cantidadP = `<p class="cart_modal_price">$${producto.precio}</p>`
        } else {
            cantidadP = `<p class="cart_modal_price">$${producto.precio} x ${producto.cantidad}
            <span>$${producto.precio * producto.cantidad}.00</span></p>`
        }
        div.innerHTML =
            `
                <img class="modal_cart_img" src="${producto.imagen}" alt="">
                <div class="modal_cart_info">
                    <p class="cart_modal_product">${producto.titulo}</p>
                    ${cantidadP}
                </div>
                <i class="modal_cart_button_delete fa-solid fa-trash" id="${producto.id}"></i>    
            `
        productosCarrito.append(div);

    });
    infoProduct.innerHTML =
        `    
    <p class="cart_modal_price">Total de ${cont} prodcutos: $${total}</p>
    <button class="modal_cart_button_checkout">Comprar</button>
    `;
    actualizrBtnDelete();
}
//Fin Mostrar productos al carrito

const actualizrNotifCart = () => {
    cont = carrito.reduce((acumulador, productCantidad) => acumulador + productCantidad.cantidad, 0);
    total = carrito.reduce((acum, productPrecio) => acum + productPrecio.precio, 0);
}

//Inicio btn borrar producto
const actualizrBtnDelete = () => {
    btnsDelete = document.querySelectorAll('.modal_cart_button_delete');
    btnsDelete.forEach(btn => {
        btn.addEventListener('click', deleteFromCart);
    });
}

let deleteFromCart = (e) => {
    let idBtn = e.currentTarget.id;
    const index = carrito.findIndex(producto => producto.id === idBtn);
    carrito.splice(index, 1);
    showCartFunction();
    localStorage.setItem("productCart", JSON.stringify(carrito));
}
//Fin btn borrar producto


if (productosEnCarrito) {
    carrito = productosEnCarrito;
    showCartFunction();
} else {
    carrito = [];
}