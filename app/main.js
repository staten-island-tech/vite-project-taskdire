import "/style.css";
import { menuItems } from "/products";
import { Domselectors } from "/dom";

function Cards() {
  menuItems.forEach((menuItems) => {
    Domselectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2>${menuItems.title}</h2>
        <img src="${menuItems.image}" alt="" class="card-img">
        <h2>${menuItems.vegan}</h2>
        <h3>${menuItems.type}</h3>
        <p>$${menuItems.price}<p>
      </div>`
    );
  });
}

Cards();

function FilterCards(type) {
  menuItems
    .filter((menuItems) => menuItems.type == type)
    .forEach((menuItems) => {
      Domselectors.box.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
        <h2>${menuItems.title}</h2>
        <img src="${menuItems.image}" alt="" class="card-img">
        <h2>${menuItems.vegan}</h2>
        <h3>${menuItems.type}</h3>
        <p>$${menuItems.price}<p>
      </div>`
      );
    });
}

FilterCards();
