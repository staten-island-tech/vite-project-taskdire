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
/* function filtercaard(){
  items = menuItems.filter((menuItem)=>menuItem.
  //filter out the filter   
  )
  items.forEach((item)=> 
    //make card

  )
} */
function FilterCards(type) {
  Domselectors.container.inner = "";
  menuItems
    .filter((menuItem) => menuItem.type == type)
    .forEach((menuItems) => {
      Domselectors.box.insertAdjacentHTML(
        "beforeend",
        `<div class="card">
        <h2>${menuItems.title}</h2>
        <img src="${menuItems.image}" alt="${menuItems.description}" class="card-img">
        <h2>${menuItems.vegan}</h2>
        <h3>${menuItems.type}</h3>
        <p>$${menuItems.price}<p>
      </div>`
      );
    });
}

Domselectors["vegan"].addEventListener("click", function () {
  FilterCards("true");
});

Domselectors["nonvegan"].addEventListener("click", function () {
  FilterCards("true");
});

Domselectors["Drink"].addEventListener("click", function () {
  FilterCards("true");
});

Domselectors["food"].addEventListener("click", function () {
  FilterCards("true");
});

//reove all cards
//filter cards
//print the filtered cards
