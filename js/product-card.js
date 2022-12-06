class ProductCard extends HTMLElement {
        // constructor() {
        //         super();
        // }
        connectedCallback() {
                this.src = this.getAttribute('src');
                this.alt = this.getAttribute('alt');
                this.text = this.getAttribute('text');
                this.price = this.getAttribute('price');

                this.parentNode.innerHTML = `
                <div class="product-card">
                        <img src="${this.src}" alt="${this.alt}">
                        <h4>${this.text}</h4>
                        <p class="product-card-price">${this.price}</p>
                </div>
                `;
        }
}

customElements.define("gs25-product-card", ProductCard);