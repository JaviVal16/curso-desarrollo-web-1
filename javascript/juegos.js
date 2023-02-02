const productos = document.querySelector('.productos');

const cargarProductos = () => {
    arryProductos.forEach(producto => {
        const div = document.createElement('div');
        div.classList.add('card');
        div.innerHTML = `
        <div class="image">
            <img class="image1" src="${producto.imagen}" alt="${producto.titulo}">
        </div>
        <p>${producto.titulo}</p>
        <p>$${producto.precio}</p>
        <button class="card_details_button" id="${producto.id}">Agrgar al carrito</button>`
    productos.append(div);
    })
}

cargarProductos();