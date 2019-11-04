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
////add if/else loop so that when cart is clicked it will remove a display/none class from cart and add
//// a display none class to products if the clicked item has the cart icon class, this way it won't add cart
//// items if you click it to then add the display/none class back to cart and remove it from products.
//// toggleAttribute might also work.

let paymentPage = document.querySelector(".payment");
paymentPage.classList.add("darken");

function openCart() {
  let cartPage = document.querySelector("#cart");
  for (let cartItems of cart.cart) {
    let pEl = document.createElement("p");
    pEl.innerText = `${cartItems} $30`;
    cartPage.appendChild(pEl);
    let deleteButton = document.createElement("button");
    deleteButton.setAttribute("type", "button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete");
    deleteButton.addEventListener("click", function(event) {
      let buttonClicked = event.target;
      buttonClicked.parentElement.remove();
    });
    pEl.appendChild(deleteButton);
  }

  //subtotal - tax - total - refresh Cart
  let subtotal = document.createElement("p");
  let subtotalNum = (cart.cart.length *= 30);
  subtotal.innerText = `Subtotal: $${subtotalNum}`;
  cartPage.appendChild(subtotal);
  let taxEl = document.createElement("p");
  let taxNum = Math.round(subtotalNum * 0.06 * 100) / 100;
  taxEl.innerText = `Tax (6% local) $${taxNum}`;
  cartPage.appendChild(taxEl);
  let total = document.createElement("p");
  let totalNum = subtotalNum + taxNum;
  total.innerText = `Total: $${totalNum}`;
  cartPage.appendChild(total);
  let refreshCart = document.createElement("button");
  refreshCart.innerText = "Refresh Cart";
  refreshCart.classList.add("refresh");
  refreshCart.setAttribute("type", "button");
  refreshCart.addEventListener("click", function() {
    subtotal.classList.add("darken");
    taxEl.classList.add("darken");
    total.classList.add("darken");
    let fakeTotal = document.createElement("p");
    fakeTotal.innerText = "Total: $0";
    cartPage.appendChild(fakeTotal);
  });
  cartPage.appendChild(refreshCart);
  let checkoutBtn = document.createElement("button");
  checkoutBtn.innerText = "Checkout";
  checkoutBtn.classList.add("checkout");

  checkoutBtn.setAttribute("type", "button");
  checkoutBtn.addEventListener("click", function() {
    cartPage.remove();
    paymentPage.classList.remove("darken");
    paymentPage.classList.add("open");
  });
  cartPage.appendChild(checkoutBtn);

  ////Cash Payments

  cartPage.classList.add("open");
  document.querySelector(".products").classList.add("darken");
  document
    .querySelector(".fa-shopping-cart")
    .removeEventListener("click", openCart);
}

////????? To do - make total work, add creditcard form, add cash thing.

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
