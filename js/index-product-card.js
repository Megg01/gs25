import ProductCard from "../modules/product-card.js";

const productCard = new ProductCard("./json/products.json");
const productBonusCard = new ProductCard("./json/products-bonus.json");
productCard.Download("normal-swiper");
productBonusCard.Download("bonus-swiper");