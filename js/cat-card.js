class catcard extends HTMLElement {
        connectedCallback(image, altText, text) {   
                this.parentNode.innerHTML = `
                <div>
                        <img src="${image}" alt="${altText}" width="50px" height="50px">
                        <div>
                                <h4>${text}</h4>
                        </div>
                </div>
                `
        }
}
class AppDrawer extends HTMLElement {
        constructor() {
                super();
                
        }
        connectedCallback() {
                
        }
        disconnectedCallback() {
                
        }
        attributeChangedCallback(attrName, oldVal, newVal) {
        
        }
    }

customElements.define("gs25-cat-card", catcard);