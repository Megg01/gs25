class ProductCardItem {
        constructor(src, alt, name, price, bonus, nutri, det) {
                this.src = src;
                this.alt = alt;
                this.name = name;
                this.price = price;
                this.bonus = bonus;
                this.nutri = nutri;
                this.det = det;
        }
        render_proCard() {
                return `<div class="clickProduct-container">
                <div class="clickProduct-img-container" style="background-image: url('${this.src}');"></div>
                <div class="clickProduct-desc">
                        <div class="clickProduct-name">
                                <h4>${this.name}</h4>
                        </div>
                        <div class="clickProduct-price">
                                <p>Үнэ: ${this.price}</p>
                        </div>
                        <div class="clickProduct-table">
                                <table>
                                        <tr>
                                                <th>
                                                        Тэжээллэг чанар (100гр)    
                                                </th>
                                                <th>
                                                        Орц найрлага
                                                </th>
                                        </tr>
                                        <tr>
                                                <td>
                                                        <ul>
                                                                ${this.nutri}
                                                        </ul>
                                                </td>
                                                <td>
                                                        <p>${this.det}</p>        
                                                </td>
                                        </tr>
                                </table>
                        </div>
                </div>
                <button onclick="remove(this.parentNode)">x</button>
        </div>
    `;
        }
}
// Product Card deer darahad parametereer buteegdehuunii ner orj irne jsonoosoo nertei ni jisheed html-eer renderlene.
function clickProduct(pro_name) {
        let returnValue = "";
        console.log(pro_name); // test

        let text1 = pro_name.trim("  ");

        for (const data of productDatas) {
                console.log(text1+"=="+data.name);
                if (text1.toUpperCase() == data.name.toUpperCase()) {
                        let obj = new ProductCardItem(data.src, data.alt, data.name, data.price, data.bonus, data.nutri, data.det);
                        returnValue = obj.render_proCard();
                        break;
                }
        }

        document.getElementsByClassName("click-product-card")[0].innerHTML = returnValue;
}
function remove(element) {
        element.parentNode.removeChild(element);
}
const productDatas = [
        {
                id: "1",
                src: "img/product-img/product-hotdog1.webp",
                alt: "hotdog",
                name: "Франкфурт хотдог",
                price: "3,000₮",
                bonus: "",
                nutri: `<li>Илчлэг: 314</li>
                <li>Өөх тос: 18.6 гр</li>
                <li>Уураг: 11.4 гр</li>
                <li>Натри: 810 мг</li>
                <li>Нүүрс ус: 24.3</li>
                <li>Элсэн чихэр: 4 гр</li>`,
                det: "Гурил, үхрийн махан зайдас амтлагч"
        },
        {
                id: "2",
                src: "img/product-img/product-hotdog2.webp",
                alt: "hotdog",
                name: "Тахиан махан хотдог",
                price: "3,000₮",
                bonus: "",
                nutri: `<li>Илчлэг: 314</li>
                <li>Өөх тос: 18.6 гр</li>
                <li>Уураг: 11.4 гр</li>
                <li>Натри: 810 мг</li>
                <li>Нүүрс ус: 24.3</li>
                <li>Элсэн чихэр: 4 гр</li>`,
                det: "Гурил, үхрийн махан зайдас амтлагч"
        },
        {
                id: "3",
                src: "img/product-img/product-chicken1.webp",
                alt: "chicken",
                name: "Chicken25 /org/ box",
                price: "22,000₮",
                bonus: "",
                nutri: `<li>Илчлэг: 314</li>
                <li>Өөх тос: 18.6 гр</li>
                <li>Уураг: 11.4 гр</li>
                <li>Натри: 810 мг</li>
                <li>Нүүрс ус: 24.3</li>
                <li>Элсэн чихэр: 4 гр</li>`,
                det: "Гурил, үхрийн махан зайдас амтлагч"
        },
        {
                id: "4",
                src: "img/product-img/product-chicken2.webp",
                alt: "chicken",
                name: "Chicken25 MIX box",
                price: "22,000₮",
                bonus: "",
                nutri: `<li>Илчлэг: 314</li>
                <li>Өөх тос: 18.6 гр</li>
                <li>Уураг: 11.4 гр</li>
                <li>Натри: 810 мг</li>
                <li>Нүүрс ус: 24.3</li>
                <li>Элсэн чихэр: 4 гр</li>`,
                det: "Гурил, үхрийн махан зайдас амтлагч"
        }
];