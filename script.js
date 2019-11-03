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
      addItem.setAttribute("data-index-number", index);
      addItem.setAttribute("type", "submit");
      addItem.innerText = "Add to cart";
      div.appendChild(addItem);
    });
  });

// // add items button
// let container = document.querySelector(".products");
// container.addEventListener("click", addToCart);

function openCart() {
  let cartPage = document.createElement("section");
  cartPage.classList.add("open");
  document.getElementById("cart").appendChild(cartPage);
  document.querySelector(".products").classList.add("darken");
  let cartList = document.createElement("ul");
  cartPage.innerText = "Shopping Cart";
  cartPage.appendChild(cartList);
}

class TheCart {
  constructor() {
    this.cart = [];
  }

  //adding item to cart
  addToCart(event) {
    if (event.target.id === "btn") {
      const index = event.target.getAttribute("data-index-number");
      this.cart.push(items[index].name);
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

document.querySelector(".fa-shopping-cart").addEventListener("click", openCart);

function openCart() {
<<<<<<< HEAD
  let cartPage = document.createElement("section");
  cartPage.classList.add("open");
  document.getElementById("cart").appendChild(cartPage);
  document.querySelector(".products").classList.add("darken");
=======
    let cartPage = document.querySelector('#cart');
    for (let cartItems of cart.cart) {
        let pEl = document.createElement('p');
        pEl.innerText = `${cartItems}`;
        cartPage.appendChild(pEl);
    }

    cartPage.classList.add("open");
    document.querySelector(".products").classList.add("darken");
    document.querySelector(".fa-shopping-cart").removeEventListener("click", openCart);
>>>>>>> 5c09f4f733d7640b82fce6ced32f68b6fe649bac
}

// function openCart(cart) {
//   let cartPage = document.createElement("section");
//   body.appendChild(cartPage);
//   for (item of cart.cart) {
//     let newItem = document.createElement("p");
//     newItem.innerText = item;
//     cartPage.appendChild(newItem);
//   }
// }

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
