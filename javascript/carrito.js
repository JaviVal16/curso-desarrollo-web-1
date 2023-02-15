//Inicio Agregar productos al carrito

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
        localStorage.setItem("productCart", JSON.stringify(carrito))
    }
    infoProduct.innerHTML = 
    `    
        <p class="cart_modal_price">Total de ${cont} prodcutos: $${total}</p>
        <button class="modal_cart_button_checkout">Comprar</button>
    `;
    //console.log(carrito);
    //console.log(productosEnCarrito);

}
//Fin Agregar productos al carrito

//Inicio Mostrar productos al carrito
if (productosEnCarrito) {
    
} else {
    
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
                <i class="modal_cart_button_delete fa-solid fa-trash" id="delete${producto.id}"></i>    
            `
        productosCarrito.append(div);

        //Inicio btn borrar producto
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
        //Fin btn borrar producto

    });
}
//Fin Mostrar productos al carrito
