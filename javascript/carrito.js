//Inicio Despliegue modal Cart
cart.addEventListener('click', () => {
    modalCart.classList.toggle('open');
});
//Fin Despliegue modal Cart

//Inicio Agregar productos al carrito
const addToCartFunction = (juegoId) => {
    const productSelect = arryProductos.find(juego => juego.id === juegoId);
    if (carrito.includes(productSelect)) {
        productSelect.cantidad += 1;
    } else {
        if (productosEnCarrito === null) {
            carrito.push(productSelect);
        } else {
            const index = carrito.findIndex(producto => producto.id === juegoId);
            const productAdd = carrito.find(product => product.id === juegoId);
            carrito.some(elem => elem.id === juegoId) ? (
                productAdd.cantidad += 1,
                carrito.splice(index, 1, productAdd)
            ) :
                carrito.push(productSelect)
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
    if (carrito.length === 0) {
        infoProduct.style.display = 'none';
        cartEmpty.style.display = 'block';
        cartNotif.style.display = 'none';
    } else {

        infoProduct.style.display = 'block';
        cartEmpty.style.display = 'none';
        cartNotif.style.display = 'block';
    }
    productosCarrito.innerHTML = '';
    carrito.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('modal_cart_details');
        let cantidadP;
        if (producto.cantidad <= 1) {
            cantidadP = `<p class="cart_modal_price">$${producto.precio}</p>`
        } else {
            cantidadP = `<p class="cart_modal_price">$${producto.precio} x ${producto.cantidad}
            <span>$${producto.precio * producto.cantidad}</span></p>`
        }
        div.innerHTML =
            `
                <img class="modal_cart_img" src="${producto.imagen}" alt="">
                <div class="modal_cart_info">
                    <p class="cart_modal_product">${producto.titulo}</p>
                    ${cantidadP}
                </div>
                <div class="modal_cart_cantidad">
                    <i class="fa-solid fa-plus" id="${producto.id}" ></i>
                    <i class="fa-solid fa-minus" id="${producto.id}" ></i>
                </div>
                <i class="modal_cart_button_delete fa-solid fa-trash" id="${producto.id}"></i>    
            `
        productosCarrito.append(div);

    });
    infoProduct.innerHTML =
        `    
    <p class="cart_modal_price">Total de ${cont} prodcutos: $${total}</p>
    <button id="btnComprar" class="modal_cart_button_checkout">Comprar</button>
    `;
    actualizrCantidadCartMas();
    actualizrCantidadCartMenos();
    actualizrBtnDelete();
    actualizrBtnComprar();
}
//Fin Mostrar productos al carrito


const actualizrNotifCart = () => {
    cont = carrito.reduce((acumulador, productCantidad) => acumulador + productCantidad.cantidad, 0);
    total = carrito.reduce((acum, productPrecio) => acum + productPrecio.precio, 0);
}



//Inicio Aumentar cantidad o diisminuir con botones
const actualizrCantidadCartMas = () => {
    btnPlus = document.querySelectorAll('.fa-plus');
    btnPlus.forEach(btn => {
        btn.addEventListener('click', modifFromCartMas);
    });
}

let modifFromCartMas = (e) => {
    let idBtn = e.currentTarget.id;
    const index = carrito.findIndex(producto => producto.id === idBtn);
    const productModif = carrito.find(product => product.id === idBtn);
    productModif.cantidad += 1;
    carrito.splice(index, 1, productModif);
    showCartFunction();
    localStorage.setItem("productCart", JSON.stringify(carrito));
}
//Fin Aumentar cantidad o diisminuir con botones

//Inicio Disminur cantidad o diisminuir con botones
const actualizrCantidadCartMenos = () => {
    btnMinus = document.querySelectorAll('.fa-minus');
    btnMinus.forEach(btn => {
        btn.addEventListener('click', modifFromCartMenos);
    });
}

let modifFromCartMenos = (e) => {
    let idBtn = e.currentTarget.id;
    const index = carrito.findIndex(producto => producto.id === idBtn);
    const productModif = carrito.find(product => product.id === idBtn);
    productModif.cantidad === 1 ? btnMinus.classList.add('animate__animated animate__swing') : productModif.cantidad -= 1;
    carrito.splice(index, 1, productModif);
    showCartFunction();
    localStorage.setItem("productCart", JSON.stringify(carrito));
}
//Fin Disminuir cantidad o diisminuir con botones


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
    const productDeleted = carrito.find(product => product.id === idBtn);
    productDeleted.cantidad = 1;
    carrito.splice(index, 1, productDeleted);
    carrito.splice(index, 1);
    showCartFunction();
    localStorage.setItem("productCart", JSON.stringify(carrito));
}
//Fin btn borrar producto



//Inicio SweetAlert
const actualizrBtnComprar = () => {
    btnComprar = document.getElementById("btnComprar");

    btnComprar.addEventListener('click', () => {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Tu compra ha sido procesada con éxito',
            showConfirmButton: false,
            timer: 2000
        });
        carrito = [];
        localStorage.setItem("productCart", JSON.stringify(carrito));
        showCartFunction();
    });
}
//Fin SweetAlert


if (productosEnCarrito) {
    carrito = productosEnCarrito;
    showCartFunction();
} else {
    carrito = [];
}