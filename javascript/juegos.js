//Inicio Mostrar juegos
let divP = document.createElement('div');
const mostrarProductos = () => {
    arryProductos.forEach(producto => {
        divP = document.createElement('div');
        divP.classList.add('card');
        divP.innerHTML = `
            <div class="image">
                <img class="image1" src="${producto.imagen}" alt="${producto.titulo}">
            </div>
            <p>${producto.titulo}</p>
            <p>$${producto.precio}</p>
            <button class="card_details_button" id="${producto.id}">Agregar al carrito</button>`
        productos.append(divP);
        const addToCartBtn = document.getElementById(`${producto.id}`);
        addToCartBtn.addEventListener('click', () => {
            addToCartFunction(producto.id);
            showCartFunction();
        });
    })
}
mostrarProductos();

//Fin mostrar juegos

//Inicio Filtro Orden
const mostrarCatOrden = () => {
    btnOrden.addEventListener('click', () =>{
        btnCateg.classList != '-enable' ? btnCateg.classList.add('-enable') : btnCateg.classList.remove('-enable');
    });
}
mostrarCatOrden();

//Inicio Categoria precio mayor a menor
precioMa.addEventListener('click', () => {
    productos.innerHTML = '';
        arryProductos.sort((a,b) => {
            if (a.precio == b.precio) {
                return 0;
            }
            if (b.precio < a.precio) {
                return -1;
            }
            return 1;
        });
        precioMa.style.diplay
        mostrarProductos();
});


//Fin Categoria precio mayor a menor

//Fin Filtro Orden

