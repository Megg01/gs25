class ProductCardItem{
        constructor(src, alt, name, price) {
                this.src = src;
                this.alt = alt;
                this.name = name;
                this.price = price;
        }
        render() {
                return `
                <div class="product-card">
                        <img src="${this.src}" alt="${this.alt}">
                        <h4>${this.name}</h4>
                        <div class="product-card-price">
                                <p>${this.price}</p>
                        </div>                
                </div>
                `;
        }
}
function App(datas, targetElement) {
        let retVal = "";

        for (const data of datas) {
            let productObj = new ProductCardItem(data.src, data.alt, data.name, data.price);
            retVal += productObj.render();
        }
        document.getElementById(targetElement).insertAdjacentHTML("beforeend", retVal);
}
window.onload = () => App(ProductCardData, "product-cards");

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
                        <img src="${this.src}" alt="${this.alt}">
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



const ProductCardData =
[
        {
                "src": "img/product-img/product-hotdog1.webp",
                "alt": "hotdog",
                "name": "Франкфурт хотдог / бяслагтай /",
                "price": "3,000₮"
        },
        {
                "src": "img/product-img/product-hotdog2.webp",
                "alt": "hotdog",
                "name": "Тахиан махан хотдог / бяслагтай /",
                "price": "3,000₮"
        },
        {
                "src": "img/product-img/product-chicken1.webp",
                "alt": "chicken",
                "name": "Chicken25 /org/ box",
                "price": "22,000₮"
        },
        {
                "src": "img/product-img/product-coffee1.webp",
                "alt": "coffee",
                "name": "Кафе25 Aмерикано",
                "price": "3,500₮"
        },
        {
                "src": "img/product-img/product-pepsi1.webp",
                "alt": "pepsi",
                "name": "Pepsi аягатай",
                "price": "1,600₮"
        }
];
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