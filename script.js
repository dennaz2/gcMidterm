"use strict";

fetch("prints.json")
    .then(res => res.json())
    .then(data => {
        // console.log(data[0].name);

        let section = document.querySelector(".products");
        for (let product of data) {
            //divs
            let div = document.createElement("div");
            div.innerText = `${product.name} ${product.description}`;
            div.classList.add("div");
            section.appendChild(div);

            //images
            let image = document.createElement('img');
            image.classList.add('img');
            image.setAttribute('src', product.image);
            div.appendChild(image);

            //price 
            let menu = document.createElement('select');

            //options 
            for (const option of product.price) {
                let options = document.createElement('option');
                options.innerText = option;
                menu.appendChild(options);
                div.appendChild(menu);
            }


        }
    });



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