"use strict"
let cart = []

function comprar(value){
    cart.push(parseInt(value.split(".").join("")));
    alert("El costo del producto seleccionado es de: $" + value + " COP y se ha añadido al carrtito de compras.\n \nEl total de su carrito de compras es: " + sumarCarrito() + " COP");
}

function sumarCarrito(){
    let total=0;
    for (let i=0; i<cart.length; i++){
        total=total+cart[i];
    }
    return total.toLocaleString("en-US",{style: "currency",currency: "USD", minimumFractionDigits:0});
}