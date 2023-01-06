class CartComponent extends HTMLElement {
        constructor() {
                super(); 
                this.products = [];
                this.className = "cart";
                this.productNum = 0;
                if(JSON.parse(localStorage.getItem('products'))){
                        const productJson = JSON.parse(localStorage.getItem('products'));
                        this.productNum = productJson.length;
                }
                else{
                        const productJson = [];
                }
                this.render_to_cart();
        }

        render_to_cart() {
                this.innerHTML = `
                        <div class="shopping-cart-container">
                                <img src="./img/shopping-cart.png" alt="shopping cart" width="40">
                                <p class="product-count" style="font-weight: bold;">${
                                        
                                        this.productNum
                                        }</p>
                        </div>
                `;
        }

        addToCart(myProduct) {
                this.products.push(myProduct);
                console.log(myProduct);
                

                const filtered = this.productJson.filter(data => data.name === myProduct.name);
                if(!filtered){
                        this.productJson.push(myProduct); //json array luuga shine jsonobject nemeh
                        console.log(filtered)
                }
                else{
                        filtered.count++;
                }
                this.productNum++;
                localStorage.setItem("products", JSON.stringify(this.productJson)); //local storaged jsonoo hadgalna
                this.render_to_cart();//shopping-cart shinechleh
        }
        addJson(jsob){
                
        }
        connectedCallback() {
                if(localStorage.getItem("products")){
                        this.productJson = JSON.parse(localStorage.getItem("products"));
                        this.productNum = this.productJson.length;
                }
                else{
                        this.productJson = [];
                }
        }
        disconnectedCallback() {
        
        }
        get productCount() {
                return this.products.length;
        }
}

window.customElements.define('cart-comp', CartComponent);