const express = require("express");

// BackEnd codiig module-chlah
const router = express.Router();
// const mysql = require("mysql");
// // Database-tei nolbolt hiine
// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "gs_products",
// });

// // Herew databaseei holbogdwol Doorhiig hewlene.
// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log("Amjilttai holbogdloo");
// });
// router.get("/", (req, res) => {
//   res.status(200).send("hha");
// });

router.get("/products", (req, res) => {
  //   res.setHeader("content-type", "application/json");
  //   db.query(
  //     "select products_name, products_src, products_price, products_bonus",
  //     (err, data) => {
  //       console.log(data);
  //       var retval = [];
  //       var items = {};
  //       var i = 0;
  //       for (const row of data.rows) {
  //         retval[i++] = items;
  //       }
  //       res.status(200).send(retval);
  //     }
  //   );
  let product = [
    {
      src: "img/product-img/product-bonus-chips1.webp",
      alt: "chips",
      name: "Чипс Realprice эрдэнэшиштэй",
      price: "7,900₮",
      bonus: "1+1",
    },
    {
      src: "img/product-img/product-bonus-fishka1.webp",
      alt: "fishka",
      name: "Самар Fishka давсалсан 50гр",
      price: "1,800₮",
      bonus: "1+1",
    },
    {
      src: "img/product-img/product-bonus-drink1.webp",
      alt: "juice",
      name: "Жүүс YouUs Алим 330Мл",
      price: "1,400₮",
      bonus: "1+1",
    },
    {
      src: "img/product-img/product-bonus-water.webp",
      alt: "water",
      name: "Ус Aqua Se 500Мл",
      price: "9,500₮",
      bonus: "1+1",
    },
    {
      src: "img/product-img/product-bonus-honey.webp",
      alt: "honey",
      name: "Халбага зөгийн бал 10Гр",
      price: "1,600₮",
      bonus: "1+1",
    },
    {
      src: "img/product-img/product-bonus-belengoimon1.webp",
      alt: "noodle",
      name: "Бэлэн гоймон Chow mein 110г",
      price: "5,100₮",
      bonus: "1+1",
    },
    {
      src: "img/product-img/product-bonus-suu1.webp",
      alt: "milk",
      name: "Сүү Вайб Улаан хүч 180 гр",
      price: "1,700₮",
      bonus: "1+1",
    },
    {
      src: "img/product-img/product-bonus-suu2.webp",
      alt: "milk",
      name: "Сүү Вайб Кафе латте 180 гр",
      price: "1,700₮",
      bonus: "1+1",
    },
  ];
  res.status(200).send(product);
  //   res.status(200).send("jja");
});
module.exports = router;
