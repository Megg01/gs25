class ProductCardItem{
        constructor(src, alt, name, price) {
                this.src = src;
                this.alt = alt;
                this.name = name;
                this.price = price;
        }
        render() {
                return `
                <div class="product-cart">
                        <img src="${this.src}" alt="${this.alt}">
                        <h4>${this.text}</h4>
                        <p class="product-cart-price">${this.price}</p>
                </div>
                `;
        }
}

export default class ProductCard{
        constructor(){

        }
}