// Uramshuulaltai buteegdehuuniih

class ProductBonusCardItem{
        constructor(src, alt, name, price) {
                this.src = src;
                this.alt = alt;
                this.name = name;
                this.price = price;
        }
        render() {
                return `
                <div class="product-bonus-card">
                        <div></div>
                        <img src="${this.src}" alt="${this.alt}" width="212px" height="212px">
                        <h4>${this.name}</h4>
                        <div class="product-bonus-card-price">
                                <p>${this.price}</p>
                        </div>                
                </div>
                `;
        }
}
function AppBonus(bonusDatas, targetBonusElement) {
        let retBonusVal = "";

        for (const data of bonusDatas) {
            let productBonusObj = new ProductBonusCardItem(data.src, data.alt, data.name, data.price);
            retBonusVal += productBonusObj.render();
        }
        document.getElementById(targetBonusElement).insertAdjacentHTML("beforeend", retBonusVal);
}
window.onload = () => AppBonus(ProductBonusCardData, "product-bonus-cards");

const ProductBonusCardData =
[
        {
                "src": "img/product-img/product-bonus-chips1.webp",
                "alt": "chips",
                "name": "Чипс Realprice эрдэнэшиштэй",
                "price": "7,900₮"
        },
        {
                "src": "img/product-img/product-bonus-chocopie1.webp",
                "alt": "chocopie",
                "name": "Чокопай Crown гүзээлзгэнэтэй",
                "price": "9,500₮"
        },
        {
                "src": "img/product-img/product-bonus-drink1.webp",
                "alt": "juice",
                "name": "Жүүс YouUs Алим 330Мл",
                "price": "1,400₮"
        },
        {
                "src": "img/product-img/product-bonus-water.webp",
                "alt": "water",
                "name": "Ус Aqua Se 500Мл",
                "price": "9,500₮"
        },
        {
                "src": "img/product-img/product-bonus-honey.webp",
                "alt": "honey",
                "name": "Халбага зөгийн бал 10Гр",
                "price": "1,600₮"
        }
];