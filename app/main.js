import "/style.css";
import { menuItems } from "/products";
import { Domselectors } from "/dom";
document.querySelector(".btn").addEventListener("click", function () {
  if (document.body.classList.contains("cool")) {
    document.body.classList.add("warm");
    document.body.classList.remove("cool");
  } else {
    document.body.classList.add("cool");
    document.body.classList.remove("warm");
  }
});

function Cards() {
  menuItems.forEach((menuItem) => {
    Domselectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2>${menuItem.title}</h2>
        <img src="${menuItem.image}" alt="${menuItem.title}" class="card-img">
        <h2>${menuItem.typev}</h2>
        <h3>${menuItem.type}</h3>
      </div>`
    );
  });
}

Cards();

function FilterCards(type) {
  const filteredItems = menuItems.filter(
    (item) => item.type === type || item.typev === type
  );
  filteredItems.forEach((menuItem) => {
    Domselectors.box.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <h2>${menuItem.title}</h2>
        <img src="${menuItem.image}" alt="${menuItem.title}" class="card-img">
        <h2>${menuItem.typev}</h2>
        <h3>${menuItem.type}</h3>
      </div>`
    );
  });
}

Domselectors["food"].addEventListener("click", function () {
  Domselectors.box.innerHTML = "";
  FilterCards("food");
});

Domselectors["drink"].addEventListener("click", function () {
  Domselectors.box.innerHTML = "";
  FilterCards("drink");
});

Domselectors["vegan"].addEventListener("click", function () {
  Domselectors.box.innerHTML = "";
  FilterCards("vegan");
});

Domselectors["nonvegan"].addEventListener("click", function () {
  Domselectors.box.innerHTML = "";
  FilterCards("nonvegan");
});
