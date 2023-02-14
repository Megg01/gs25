class AddCart extends HTMLElement {
        constructor(){
                super();
                this.innerHTML = `
                        <div class="product-card-plus-container">
                                <div class="plus-icon"></div>
                        </div>
                `;
        }
        connectedCallback(){
                this.parentNode.querySelector("add-cart").addEventListener('click', () => {
                        const cart = document.querySelector("cart-comp");
                        const json = 
                                {
                                "name": this.parentNode.childNodes[3].textContent.trim(" "),
                                "src": this.parentNode.childNodes[1].style.backgroundImage.slice(5, -2),
                                "price": this.parentNode.childNodes[5].textContent.trim(" "),
                                "unit": 1
                                };
                        
                        console.log(this.parentNode.childNodes[1].style.backgroundImage.slice(5, -2));
                        cart.addToCart(json);
                });
        }

}
customElements.define("add-cart", AddCart);