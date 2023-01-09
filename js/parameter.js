import ProductCard from "../modules/product-card.js";

const productAllCard = new ProductCard("./json/all_product.json");
const product1plus1Card = new ProductCard(
  "http://localhost:2000/product1plus1"
);
const productBelenCard = new ProductCard("./json/belenProduct.json");
const product2plus1Card = new ProductCard("./json/2plus1product.json");
const productDrink = new ProductCard("./json/drink.json");
const productSaleCard = new ProductCard("./json/Sale.json");
const productSnackCard = new ProductCard("./json/Snack.json");
const productHomeCard = new ProductCard("./json/homeProduct.json");
const productFastFoodCard = new ProductCard("./json/fastfood.json");

const urlParams = new URLSearchParams(window.location.search);
const myParam = urlParams.get("category");

getCategoryData(myParam);

// let req = new XMLHttpRequest();
// req.onreadystatechange = () => {
//   if (req.readyState == XMLHttpRequest.DONE) {
//     console.log(req.responseText);;
//   }
// };

// req.open("GET", "https://api.jsonbin.io/v3/b/63a2f49f15ab31599e21ce14/latest", true);
// req.setRequestHeader("X-Master-Key", "$2b$10$ANnvIXALFqAYrb8Gwrum0.6JvSyaP7M7BEeZ8hg7UPJGzBOlkNQJi");
// req.send();

export default function getCategoryData(myParam) {
  switch (myParam) {
    case "all":
      productAllCard.Download("all_products");
      product1plus1Card.DownloadAPI("all_products");
      productDrink.Download("all_products");
      productSaleCard.Download("all_products");
      productHomeCard.Download("all_products");
      product2plus1Card.Download("all_products");
      console.log(myParam);
      break;
    case "belen":
      productBelenCard.Download("all_products");
      console.log(myParam);
      break;
    case "snack":
      productSnackCard.Download("all_products");
      console.log(myParam);
      break;
    case "drink":
      productDrink.Download("all_products");
      console.log(myParam);
      break;
    case "home":
      productHomeCard.Download("all_products");
      console.log(myParam);
      break;
    case "fastfood":
      productFastFoodCard.Download("all_products");
      console.log(myParam);
      break;
    case "bonus":
      console.log(myParam);
      product1plus1Card.DownloadAPI("all_products");
      product2plus1Card.Download("all_products");
      break;
    case "1plus1":
      console.log(myParam);
      product1plus1Card.Download("all_products");
      break;
    case "sale":
      console.log(myParam);
      productSaleCard.Download("all_products");
      break;
    case "2plus1":
      console.log(myParam);
      product2plus1Card.Download("all_products");
      break;
    default:
      console.log(myParam);
      productAllCard.Download("all_products");
      product1plus1Card.DownloadAPI("all_products");
      productDrink.Download("all_products");
      productSaleCard.Download("all_products");
      productHomeCard.Download("all_products");
      product2plus1Card.Download("all_products");
      break;
  }
}
