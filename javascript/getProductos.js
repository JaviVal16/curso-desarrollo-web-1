sig.addEventListener('click', () => {
    apiCall();
});

const apiCall = () => {
    console.log('click');
    productos.innerHTML = '';
    fetch(localGet)
        .then(data => data.json())
        .then(info => info.forEach(juegos => {
            divP = document.createElement('div');
            divP.classList.add('card');
            divP.innerHTML = `
            <div class="image">
                <img class="image1" src="${juegos.imagen}" alt="${juegos.titulo}">
            </div>
            <p>${juegos.titulo}</p>
            <p>$${juegos.precio}</p>
            <button class="card_details_button" id="${juegos.id}">Agregar al carrito</button>`
            productos.append(divP);
            const addToCartBtn = document.getElementById(`${juegos.id}`);
            addToCartBtn.addEventListener('click', () => {
                addToCartFunction(juegos.id);
                showCartFunction();
            });
        }))
};