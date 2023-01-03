
class CategoryItem {
        constructor(href, src, alt, name) {
                this.href = href;
                this.src = src;
                this.alt = alt;
                this.name = name;
        }
        render() {
                return `
                <a href="${this.href}">
                        <div class="cat-card">
                                <div class="cat-card-img"
                                        style="background-image: url('${this.src}');">
                                </div>
                                <div>
                                        <h4>${this.name}</h4>
                                </div>
                        </div>
                </a>
                `;
        }
}
function Category(datas, targetElement) {
        let returnValue = "";

        for (const data of datas) {
                let catObj = new CategoryItem(
                        data.href,
                        data.src,
                        data.alt,
                        data.name
                );
                returnValue += catObj.render();
        }
        document
                .getElementsByClassName(targetElement)[0]
                .insertAdjacentHTML("beforeend", returnValue);
}

const CategoryData = [
        {
                href: "/product.html?category=belen",
                src: "https://img.icons8.com/plasticine/100/null/hot-dog.png",
                alt: "hot-dog",
                name: "Бэлэн бүтээгдэхүүн"
        },
        {
                href: "/product.html?category=snack",
                src: "https://img.icons8.com/external-flaticons-lineal-color-flat-icons/100/null/external-chips-brewery-flaticons-lineal-color-flat-icons.png",
                alt: "chips",
                name: "Амттан"
        },
        {
                href: "/product.html?category=drink",
                src: "https://img.icons8.com/plasticine/100/1FB141/kawaii-soda.png",
                alt: "drink",
                name: "Шингэн хүнс"
        },
        {
                href: "/product.html?category=fastfood",
                src: "https://img.icons8.com/plasticine/100/null/noodles.png",
                alt: "fast-food",
                name: "Түргэн хоол"
        },
        {
                href: "/product.html?category=ger",
                src: "https://img.icons8.com/color/100/null/box-tissue.png",
                alt: "tissue",
                name: "Ахуйн бараа"
        },
        {
                href: "/product.html?category=bonus",
                src: "https://img.icons8.com/external-flatart-icons-lineal-color-flatarticons/100/null/external-gift-valentines-day-flatart-icons-lineal-color-flatarticons-5.png",
                alt: "gift",
                name: "Урамшуулалтай"
        }
];

window.onload = () => {
        Category(CategoryData, "category-cards");
};