class ProductCardItem{
        constructor(src, alt, name, price) {
                this.src = src;
                this.alt = alt;
                this.name = name;
                this.price = price;
        }
        render1() {
                return `
                <div class="product-card">
                        <img src="${this.src}" alt="${this.alt}" width="212px" height="212px">
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
            retVal += productObj.render1();
        }
        document.getElementByClassId(targetElement).insertAdjacentHTML("beforeend", retVal);
}
window.onload = () => App(ProductCardData, "product-normal-cards");


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