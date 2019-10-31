"use strict";

const newArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

let bodyEl = document.querySelector("body");

for (let i = 0; i <= 10; i++) {
  let div = document.createElement("div");
  bodyEl.appendChild(div);
}
