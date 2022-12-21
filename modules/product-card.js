class ProductCardItem {
        constructor(src, alt, name, price, bonus) {
                this.src = src;
                this.alt = alt;
                this.name = name;
                this.price = price;
                this.bonus = bonus;
        }
        render_proCard() {
                if (this.bonus == ""){
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
                }
                else{
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
export default class ProductCard {
        constructor(productUrl) {
                this.productUrl = productUrl;
        }

        Download(targetElement) {
                fetch(`${this.productUrl}`)
                .then( result => {
                        result.json()
                                .then(jsob => {
                                        document.getElementsByClassName(targetElement)[0].insertAdjacentHTML("beforeend",
                                                jsob.map(productCard => {
                                                        // if((targetElement == "normal-swiper") && (productCard.bonus == "")){
                                                                const _productCard = new ProductCardItem(productCard.src, productCard.alt, productCard.name, productCard.price ,productCard.bonus);
                                                                return _productCard.render_proCard();
                                                        // }
                                                        // if((targetElement == "bonus-swiper") && !(productCard.bonus == "")){
                                                        //         const _productCard = new ProductCardItem(productCard.src, productCard.alt, productCard.name, productCard.price ,productCard.bonus);
                                                        //         return _productCard.render_proBonusCard();
                                                        // }
                                                })
                                                .reduce((prevVal, curVal) => prevVal + curVal, "")
                                        );
                                })
                })
                .catch(err => {console.log(err)});
        }
}
// let req = new XMLHttpRequest();

// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     console.log(req.responseText);
//   }
// };

// req.open("GET", "https://api.jsonbin.io/v3/b/63a2f49f15ab31599e21ce14", true);
// req.setRequestHeader("X-Master-Key", "$2b$10$ANnvIXALFqAYrb8Gwrum0.6JvSyaP7M7BEeZ8hg7UPJGzBOlkNQJi");
// req.send();
const productCard = new ProductCard("./json/products.json");
const productBonusCard = new ProductCard("./json/products-bonus.json");
productCard.Download("normal-swiper");
productBonusCard.Download("bonus-swiper");