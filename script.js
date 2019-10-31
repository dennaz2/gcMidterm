"use strict";

fetch("prints.json")
    .then(res => res.json())
    .then(data => {
        // console.log(data[0].name);

        let section = document.querySelector('.products');
        for (let product of data) {
            let div = document.createElement("div");
            div.innerText = product.name;
            div.classList.add('div');
            section.appendChild(div);
        }
    })


