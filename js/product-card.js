class ProductCardItem{
        constructor(src, alt, name, price) {
                this.src = src;
                this.alt = alt;
                this.name = name;
                this.price = price;
        }
        render1() {
                return `
                <div class="product-card swiper-slide">
                        <div class="product-card-img-container"  style="background-image: url('${this.src}');"></div>
                        <div class="product-card-name">
                                <h4>${this.name}</h4>
                        </div>
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
        document.getElementsByClassName(targetElement)[0].insertAdjacentHTML("beforeend", retVal);
}

const ProductCardData =
[
        {
                "src": "img/product-img/product-hotdog1.webp",
                "alt": "hotdog",
                "name": "Франкфурт хотдог",
                "price": "3,000₮"
        },
        {
                "src": "img/product-img/product-hotdog2.webp",
                "alt": "hotdog",
                "name": "Тахиан махан хотдог",
                "price": "3,000₮"
        },
        {
                "src": "img/product-img/product-chicken1.webp",
                "alt": "chicken",
                "name": "Chicken25 /org/ box",
                "price": "22,000₮"
        },
        {
                "src": "img/product-img/product-chicken2.webp",
                "alt": "chicken",
                "name": "Chicken25 MIX box",
                "price": "22,000₮"
        },
        {
                "src": "img/product-img/product-chicken3.webp",
                "alt": "chicken",
                "name": "Chicken25 /sauce/",
                "price": "4,900₮"
        },
        {
                "src": "img/product-img/product-pepsi1.webp",
                "alt": "pepsi",
                "name": "Pepsi аягатай",
                "price": "1,600₮"
        },
        {
                "src": "img/product-img/product-coffee1.webp",
                "alt": "coffee",
                "name": "Кафе25 Aмерикано",
                "price": "3,500₮"
        },
        {
                "src": "img/product-img/product-mantuunbuuz1.webp",
                "alt": "mantuu",
                "name": "Мантуун бууз / кимчи /",
                "price": "1,800₮"
        },
        {
                "src": "img/product-img/product-boortsog.webp",
                "alt": "mantuu",
                "name": "Боорцог / мушгиа /",
                "price": "1,000₮"
        }
];

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
                <div class="product-bonus-card swiper-slide">
                        <div class="product-bonus-card-img-container"  style="background-image: url('${this.src}');"></div>
                        <div class="product-bonus-card-name">
                                <h4>${this.name}</h4>
                        </div>
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
        document.getElementsByClassName(targetBonusElement)[0].insertAdjacentHTML("beforeend", retBonusVal);
}


const ProductBonusCardData =
[
        {
                "src": "img/product-img/product-bonus-chips1.webp",
                "alt": "chips",
                "name": "Чипс Realprice эрдэнэшиштэй",
                "price": "7,900₮"
        },
        {
                "src": "img/product-img/product-bonus-fishka1.webp",
                "alt": "fishka",
                "name": "Самар Fishka давсалсан 50гр",
                "price": "1,800₮"
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
        },
        {
                "src": "img/product-img/product-bonus-belengoimon1.webp",
                "alt": "noodle",
                "name": "Бэлэн гоймон Chow mein 110г",
                "price": "5,100₮"
        },
        {
                "src": "img/product-img/product-bonus-suu1.webp",
                "alt": "milk",
                "name": "Сүү Вайб Улаан хүч 180 гр",
                "price": "1,700₮"
        },
        {
                "src": "img/product-img/product-bonus-suu2.webp",
                "alt": "milk",
                "name": "Сүү Вайб Кафе латте 180 гр",
                "price": "1,700₮"
        }
];

window.onload = () =>{
        App(ProductCardData, "normal-swiper");
        AppBonus(ProductBonusCardData, "bonus-swiper");
}