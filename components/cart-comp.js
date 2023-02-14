class ShoppingCartProduct {
        constructor(src, name, price, unit) {
                this.src = src;
                this.name = name;
                this.price = price;
                this.unit = unit;
        }
        render_product_card() {
                return  `
                <div class="product-card swiper-slide">
                        <div class="product-card-img-container" style="background-image: url('${this.src}')"></div>
                        <div class="product-card-name" onclick="clickProduct(this.childNodes[1].textContent)">
                                <h4>${this.name}</h4>
                        </div>
                        <div class="product-card-price">
                                <p>${this.price}</p>
                        </div>
                        <div class="unit">
                                <button>-</button>
                                <p>${this.unit}</p>
                                <button>+</button>
                        </div>
                </div>
                `;
        }
        render_checkout() {
                return `
                <div class="checkout-card">
                        <div class="checkout-card-name">
                                <h4>${this.name}</h4>
                        </div>
                        <div class="checkout-card-price">
                                <p>${this.price}</p>
                        </div>
                        <div style="position:absolute;
                                right:0.5vw;
                                font-weight: bold;
                        ">
                                <p>${this.unit}</p>
                        </div>
                </div>
                `;
        }
}

class CartComponent extends HTMLElement {
        constructor() {
                super(); 
                this.products = [];
                this.className = "cart";
                this.returnValue = "";
                this.returnCheckout = "";
                this.productNum = 0;
                if(JSON.parse(localStorage.getItem('products'))){
                        const productJson = JSON.parse(localStorage.getItem('products'));
                        this.productNum = productJson.length;
                }
                else{
                        const productJson = [];
                }
                this.render_cart();
        }

        render_cart() {
                if(!JSON.parse(localStorage.getItem('products'))){
                        this.productNum = 0;
                }
                this.innerHTML = `
                        <div class="shopping-cart-container">
                                <img src="./img/shopping-cart.png" alt="shopping cart" width="40">
                                <p class="product-count" style="font-weight: bold;">${this.productNum}</p>
                        </div>
                `;
        }

        addToCart(myProduct) {
                this.products.push(myProduct);
                
                const product = new ShoppingCartProduct(myProduct.src, myProduct.name, myProduct.price, myProduct.unit);

                console.log(product);
                this.productJson.push(myProduct); //json array luuga shine jsonobject nemeh

                localStorage.setItem("products", JSON.stringify(this.productJson)); //local storaged jsonoo hadgalna
                this.productNum++;
                this.render_cart();//shopping-cart shinechleh

                this.returnValue += product.render_product_card();
                this.returnCheckout += product.render_checkout();
        }
        jsonToCard(){
                if(JSON.parse(localStorage.getItem('products'))){
                        const products = JSON.parse(localStorage.getItem('products'));
                        for(const data of products){
                                const product = new ShoppingCartProduct(data.src, data.name, data.price, data.unit);
                                this.returnValue += product.render_product_card();
                                this.returnCheckout += product.render_checkout();
                        }
                        if(document.querySelector(".shopping-cart-products")){
                                document.querySelector(".shopping-cart-products").innerHTML = this.returnValue;
                                document.querySelector(".shopping-cart-checkout").innerHTML = this.returnCheckout;

                        }
                }
                else{
                        if(document.querySelector(".shopping-cart-products")){
                                document.querySelector(".shopping-cart-products").innerHTML = `<h2>Сагс хоосон байна.</h2>`;
                                document.querySelector(".shopping-cart-checkout").innerHTML = ``;
                        }
                }
        }
        connectedCallback() {
                if(localStorage.getItem("products")){
                        this.productJson = JSON.parse(localStorage.getItem("products"));
                        this.productNum = this.productJson.length;
                }
                else{
                        this.productJson = [];
                }
                this.jsonToCard();
        }
        disconnectedCallback() {

        }
        get productCount() {
                return this.productNum;
        }
}
window.customElements.define('cart-comp', CartComponent);
