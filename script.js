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
        titleEl.setAttribute('data-index-number', index);
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
      addItem.setAttribute("type", "submit");
      addItem.innerText = "Add to cart";
      div.appendChild(addItem);
    });
  });

let cart = [];

// add items button
let container = document.querySelector(".products");
container.addEventListener("click", addToCart);

function addToCart(event) {
  if (event.target.id === "btn") {
    console.log(event.target);
    console.log(event.target.parentElement);
    const index = event.target.parentElement.getAttribute("data-index-number");
    cart.push(items[index]);
    console.log(cart);
  }
}

// document.querySelector('button').addEventListener('click', function () {
//     console.log(items);
//     console.log(btn);
// });

// function test() {
//     //add items button
//     let btn = document.querySelector("#btn")
//     btn.addEventListener('click', addToCart);

//     function addToCart(event) {
//         console.log("This works")
//     }
// }

// let cart = document.querySelector('.fas');
// cart.addEventListener('click', open);

// function open(event) {
//     let openMenu = document.createElement('section');
//     openMenu.classList.add('open');
//     if (!cartArray) {
//         openMenu.innerText = "Nothing in your cart"
//     }
//     else {
//         for (let item of cartArray) {
//             //make elements
//             //append to openMenu section
//             //append to appropriate place in document
//         }
//     }

// }
