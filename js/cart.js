// VARIABLES
const cart = document.querySelector("#shopping-cart");
const cartContainer = document.querySelector("#cart-list tbody");
const emptyCartBtn = document.querySelector("#empty-cart");
const itemList = document.querySelector("#item-list");
let itemsCart = [];

addEventListeners();
function addEventListeners(){
    // AGREGAR ITEM AL PRESIONAR "AGREGAR AL CARRITO"
    itemList.addEventListener("click", addItem);

    //Elimina items del cart
    cart.addEventListener("click", deleteItem);

    // Vaciar cart
    emptyCartBtn.addEventListener("click", () => {
        itemsCart = []; // array reset

        clearHTML(); // eliminamos todo el html
    })
}


// FUNCIONES
function addItem(e){
    e.preventDefault();
    if(e.target.classList.contains("add-cart")){
        const itemSelected = e.target.parentElement.parentElement;
        readItemData(itemSelected);
    }
}

//Elimina items del cart
function deleteItem(e){   console.log(e.target.classList);
    if(e.target.classList.contains("clear-item")) {
        const itemId = e.target.getAttribute("data-id");

        // eliminar del array de itemsCart[] por el data-id
        itemsCart = itemsCart.filter( item => item.id !== itemId );

        cartHTML(); //iterar sobre el cart y mostrar el html
    }
}

// --- Lee el contenido del .html al que clickeamos y trae la info
function readItemData(item){
    // console.log(item);

    // Creacion de objeto con la info del item
    const dataItem = {
        imagen: item.querySelector("img").src,
        titulo: item.querySelector("h2").textContent,
        precio: item.querySelector("h4").textContent,
        id: item.querySelector("button").getAttribute("data-id"),
        cantidad: 1
    }

    // Revisa si un item ya esta en el cart
    const itemCheck = itemsCart.some( item => item.id === dataItem.id );
    if (itemCheck) {
        // actualizar cantidad
        const items = itemsCart.map( item => {
            if( item.id === dataItem.id ) {
                item.cantidad++;
                return item; // retorna el objeto (item) actualizado
            }else {
                return item; // retorna objetos que no son duplicados
            }
        })
        itemsCart = [...items];
    } else{
        // agregar item al cart
        itemsCart = [...itemsCart, dataItem];
    }

    // agrega items al carrito

    console.log(itemsCart);

    cartHTML();
}


// muestra el cart en el.html
function cartHTML() {

    // limiar html
    clearHTML();

    // recorre el carro y genera el html
    itemsCart.forEach( item => {
        console.log(item);
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>
                <img class="cartImg" src="${item.imagen}" >
            </td>
            <td>
                ${item.titulo}
            </td>
            <td>
                ${item.precio}
            </td>
            <td>
                ${item.cantidad}
            </td>
            <td>
                <a href="#" class="clear-item" data-id="${item.id}"> X </a>
            </td>
        `;

        // agrega el html del cart en el<tbody>
        cartContainer.appendChild(row);
    });


}

// eliminar items del <tbody>
function clearHTML() {
    while(cartContainer.firstChild) {
        cartContainer.removeChild(cartContainer.firstChild)
    }
}