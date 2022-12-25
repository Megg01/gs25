class ProductCardItem {
  constructor(src, alt, name, price, bonus) {
    this.src = src;
    this.alt = alt;
    this.name = name;
    this.price = price;
    this.bonus = bonus;
  }
  render_proCard() {
    if (this.bonus == "") {
      return `
                          <div class="product-card swiper-slide">
                                  <div class="product-card-img-container"  style="background-image: url('${this.src}');"></div>
                                  <div class="product-card-name">
                                          <h4>${this.name}</h4>
                                  </div>
                                  <div class="product-card-price">
                                          <p>${this.price}</p>
                                  </div>
                          </div>
                          `;
    } else {
      return `
                          <div class="product-card swiper-slide">
                                  <div class="product-card-img-container"  style="background-image: url('${this.src}');"></div>
                                  <div class="bonus-number">${this.bonus}</div>
                                  <div class="product-card-name">
                                          <h4>${this.name}</h4>
                                  </div>
                                  <div class="product-card-price">
                                          <p>${this.price}</p>
                                  </div>
                          </div>
                          `;
    }
  }
}

function haha(data) {
  var productsClassName =
    document.getElementsByClassName("products_list")[0].innerHTML;
  switch (data) {
    case 1:
      productsClassName = `<div class="all-products all-Bonus-products"></div>`;
      break;
    case 2:
      productsClassName = `<div class="belen_product"></div>`;
      break;
    case 3:
      productsClassName = `<div class="all-products all-Bonus-products"></div>`;
      break;
    case 4:
      productsClassName = `<div class="all-products all-Bonus-products"></div>`;
      break;
    case 5:
      productsClassName = `<div class="all-products all-Bonus-products"></div>`;
      break;
    case 6:
      productsClassName = `<div class="all-products all-Bonus-products"></div>`;
      break;
  }
}
export default class ProductCard {
  constructor(productUrl) {
    this.productUrl = productUrl;
  }

  Download(targetElement) {
    fetch(`${this.productUrl}`)
      .then((result) => {
        result.json().then((jsob) => {
          document.getElementsByClassName(targetElement)[0].insertAdjacentHTML(
            "beforeend",
            jsob
              .map((productCard) => {
                const _productCard = new ProductCardItem(
                  productCard.src,
                  productCard.alt,
                  productCard.name,
                  productCard.price,
                  productCard.bonus
                );
                return _productCard.render_proCard();
              })
              .reduce((prevVal, curVal) => prevVal + curVal, "")
          );
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const productAllCard = new ProductCard("./json/all_product.json");
const productAllBonusCard = new ProductCard("./json/all_Bonusproduct.json");
const productBelenCard = new ProductCard("./json/belenProduct.json");
productAllCard.Download("all_products");
productAllBonusCard.Download("all_Bonus_products");
productBelenCard.Download("belen_product");
