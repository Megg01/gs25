class CategoryCard extends HTMLElement {
        // constructor() {
        //         super();
        // }
        connectedCallback() {
                this.img = this.getAttribute('img');
                this.alt = this.getAttribute('alt');
                this.text = this.getAttribute('text');

                this.parentNode.innerHTML = `
                        <div>
                                <div>
                                        <img src="${this.img}" alt="${this.alt}" width="50px" height="50px">
                                </div>        
                                <div>
                                        <h4>${this.text}</h4>
                                </div>
                        </div>
                `;
        }
}

customElements.define("gs25-cat-card", CategoryCard);