// document.body.onload = renderCartItems;
"use strict"
let cart = []

function addCartItems(value){
    console.log(value.split(","));
    let name = value.split(",")[0];
    let price = parseInt(value.split(',')[1].split('.').join(""));
    cart.push({
        name,
        price
    })
    renderCartItems()
}

function sumCartItems(){
    let total=0;
    for (let i=0; i<cart.length; i++){
        total=total+cart[i];
    }
    return total.toLocaleString("en-US",{style: "currency",currency: "USD", minimumFractionDigits:0});
}

function renderCartItems (){
    let shoppingCartDiv = document.getElementById("shopping-cart");
    if (cart.length === 0){
        let emptyCartDiv = document.createElement("div");
        let emptyCartDivContent = document.createTextNode("Empty Cart");
        emptyCartDiv.appendChild(emptyCartDivContent);
        shoppingCartDiv.appendChild(emptyCartDiv);
    }else{
        for (let index = 0; index < cart.length; index+=1){
            let itemCard = document.createElement("div")
            itemCard.classList.add("item-card")
            // h1 -> item-card__name
            // p -> item-card__price
            console.log(itemCard.className)
            let itemName = document.createElement("p");
            itemName.classList.add("item-card__name")
            itemName.appendChild(document.createTextNode(cart[index].name));
            let itemPrice = document.createElement("p");
            itemPrice.classList.add("item-card__price")
            itemPrice.appendChild(document.createTextNode(cart[index].price.toLocaleString("en-US",{style: "currency",currency: "USD", minimumFractionDigits:0}) + " COP"));
            itemCard.appendChild(itemName);
            itemCard.appendChild(itemPrice);
            shoppingCartDiv.appendChild(itemCard);
        }
    }
}
