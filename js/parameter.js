import ProductCard from "../modules/product-card.js";

const productAllCard = new ProductCard("./json/all_product.json");
const productAllBonusCard = new ProductCard("./json/all_Bonusproduct.json");
const productBelenCard = new ProductCard("./json/belenProduct.json");

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("category");

getData(myParam);


// let req = new XMLHttpRequest();
// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     console.log(req.responseText);
//   }
// };

// req.open("GET", "https://api.jsonbin.io/v3/b/63a2f49f15ab31599e21ce14/latest", true);
// req.setRequestHeader("X-Master-Key", "$2b$10$ANnvIXALFqAYrb8Gwrum0.6JvSyaP7M7BEeZ8hg7UPJGzBOlkNQJi");
// req.send();



export default function getData(myParam){
        switch (myParam) {
                case "all":
                        console.log(myParam);
                        productAllCard.Download("all_products");
                        productAllBonusCard.Download("all_products");
                        break;
                case "belen":
                        productBelenCard.Download("all_products");              
                        console.log(myParam);
                        break;
                case "snack":
                        console.log(myParam);
                        break;
                case "drink":
                        console.log(myParam);
                        break;
                case "ger":
                        console.log(myParam);
                        break;
                case "fastfood":
                        console.log(myParam);
                        break;
                case "bonus":
                        console.log(myParam);
                        productAllBonusCard.Download("all_products");
                        break;
                default:
                        console.log(myParam);
                        productAllCard.Download("all_products");
                        productAllBonusCard.Download("all_products");
                        break;
        }
}