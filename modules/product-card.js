import "../js/plus-cart-comp.js";

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
                                <div class="product-card-name" onclick="clickProduct(this.childNodes[1].textContent)">
                                        <h4>${this.name}</h4>
                                </div>
                                <div class="product-card-price">
                                        <p>${this.price}</p>
                                </div>
                                <add-cart title="Сагсанд нэмэх"></add-cart>
                        </div>
                        `;
    } else {
      return `
                        <div class="product-card swiper-slide">
                                <div class="product-card-img-container"  style="background-image: url('${this.src}');"></div>
                                <div class="product-card-name" onclick="clickProduct(this.childNodes[3].textContent)">
                                        <h4>${this.name}</h4>
                                </div>
                                <div class="product-card-price">
                                        <p>${this.price}</p>
                                </div>
                                <div class="bonus-number">${this.bonus}</div>
                                <add-cart title="Сагсанд нэмэх"></add-cart>
                        </div>
                        `;
    }
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

  Download1(targetElement) {
    fetch(`${this.productUrl}`, {
      method: "GET",
      headers: {
        "secret-key":
          "$2b$10$ANnvIXALFqAYrb8Gwrum0.6JvSyaP7M7BEeZ8hg7UPJGzBOlkNQJi",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        document
          .getElementsByClassName(targetElement)[0]
          .insertAdjacentHTML("beforeend", data);
      });
  }

  DownloadFilter(targetElement) {
    fetch(`${this.productUrl}`)
      .then((result) => {
        result.json().then((jsob) => {
          const filterProduct = jsob.filter((items) => items.bonus == "1+1");
          if (filterProduct.length > 0) {
            document
              .getElementsByClassName(targetElement)[0]
              .insertAdjacentHTML(
                "beforeend",
                filterProduct
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
          }
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
}
