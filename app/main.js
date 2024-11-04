import "../css/style.css";
import { menuItems as Food } from "./products";
import { Domselectors } from "./dom";

function Cards() {
  Food.forEach((menuItem) => {
    Domselectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2>${menuItem.title}</h2>
        <img src="${menuItem.image}" alt="" class="card-img">
        <h2>${menuItem.vegan}</h2>
        <h3>${menuItem.type}</h3>
        <p>$${menuItem.price}<p>
      </div>`
    );
  });
}

Cards();
