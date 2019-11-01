"use strict";

let items = null; //used to get the data from inside of the fetch
let div;
fetch("prints.json")
    .then(res => res.json())
    .then(data => {
        // console.log(data[0].name);
        items = data;
        let section = document.querySelector(".products");
        data.forEach((product, index) => {
            //divs
            let div = document.createElement("div");
            div.classList.add("div");
            section.appendChild(div);

            //title
            let titleEl = document.createElement("div");
            titleEl.innerText = `${product.name}`;
            titleEl.classList.add("title");
            div.appendChild(titleEl);

            //images
            let image = document.createElement("img");
            image.classList.add("img");
            image.setAttribute("src", product.image);
            div.appendChild(image);

            //description
            let descriptionEl = document.createElement("div");
            descriptionEl.innerText = `${product.description}`;
            descriptionEl.classList.add("description");
            div.appendChild(descriptionEl);

            //   //price
            //   let menu = document.createElement("select");

            //   //options
            //   for (const option of product.price) {
            //     let options = document.createElement("option");
            //     options.innerText = option;
            //     menu.appendChild(options);
            //     div.appendChild(menu);
            //   }

            //priceAss
            let priceEl = document.createElement("div");
            priceEl.innerText = `$${product.priceAss}`;
            div.appendChild(priceEl);

            //button for adding items to cart.
            let addItem = document.createElement("button");
            addItem.id = "btn";
            addItem.setAttribute('data-index-number', index);
            addItem.setAttribute("type", "submit");
            addItem.innerText = "Add to cart";
            div.appendChild(addItem);
        });
    });





// // add items button
// let container = document.querySelector(".products");
// container.addEventListener("click", addToCart); 

class TheCart {
    constructor() {
        this.cart = [];
    }


    //adding item to cart 
    addToCart(event) {
        console.log("hi", this);
        if (event.target.id === "btn") {
            console.log(event.target);
            console.log(event.target.parentElement);
            const index = event.target.getAttribute("data-index-number");
            this.cart.push(items[index].name);
            console.log(this.cart);
        }
    }
}

const cart = new TheCart();
let container = document.querySelector(".products");
//container.addEventListener("click", cart.addToCart);
// container.addEventListener("click", (e) => {
//     cart.addToCart(e);
// });
container.addEventListener("click", cart.addToCart.bind(cart));

// let cart = []; //cart 

// // add items button
// let container = document.querySelector(".products");
// container.addEventListener("click", addToCart);

// function addToCart(event) {
//   if (event.target.id === "btn") {
//     console.log(event.target);
//     console.log(event.target.parentElement);
//     const index = event.target.getAttribute("data-index-number");
//     cart.push(items[index].name);
//       console.log(cart);
//       let cartItem = document.createElement('p');
//       cartItem.innerText = `${items[index].name}  $${items[index].priceAss}`;
//       console.log(cartItem);
//   }
// }

// // getting items to add to cart and open the cart when pressed 
// let theCart = document.querySelector('.open-cart');
// theCart.addEventListener('click', open);

// function open(event) {
//     let openMenu = document.createElement('section');
//     openMenu
//     openMenu.classList.add('open');
//     if (!cart) {
//         console.log("Nothing in your cart");
//     }
//     else {
//         for (let item of cart) {
//             //make elements
//             let CartItems = document.createElement('p');
//             cartItems.innerText = cart;
//             //append to openMenu section
//             //append to appropriate place in document
//         }
//     }