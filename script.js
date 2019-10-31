"use strict";

fetch("prints.json")
    .then(res => res.json())
    .then(data => {
        // console.log(data[0].name);
        for (let product of data)
    })

// let bodyEl = document.querySelector("body");

for (let i = 0; i <= 10; i++) {
    let div = document.createElement("div");
    bodyEl.appendChild(div);
}
