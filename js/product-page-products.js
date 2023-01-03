import ProductCard from "../modules/product-card.js";

const productAllCard = new ProductCard("./json/all_product.json");
const productAllBonusCard = new ProductCard("./json/all_Bonusproduct.json");
const productBelenCard = new ProductCard("./json/belenProduct.json");


export default function haha(data) {
        const productsClassName = document.getElementsByClassName("product_list")[0];
        console.log("ene dugaar shuu", data);
        switch (data) {
          case 1:
            productsClassName.innerHTML = `<div class="all_products all_Bonus_products"></div>`;
            productAllCard.Download("all_products");
            productAllBonusCard.Download("all_Bonus_products");
            break;
          case 2:
            productsClassName.innerHTML = `<div class="belen_product"></div>`;
            productBelenCard.Download("belen_product");
            break;
          case 3:
            productsClassName.innerHTML = `<div class="amttan_ptoduct"></div>`;
            break;
          case 4:
            productsClassName.innerHTML = `<div class="Drink"></div>`;
            break;
          case 5:
            productsClassName.innerHTML = `<div class="all-products all-Bonus-products"></div>`;
            break;
          case 6:
            productsClassName.innerHTML = `<div class="all-products all-Bonus-products"></div>`;
            break;
        }
      }

window.onload = () => {
  haha(1);
};
