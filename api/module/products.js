const express = require("express");

// BackEnd codiig module-chlah
const router = express.Router();

// MySql-tei haritsah package
const mysql = require("mysql");
// Database-tei nolbolt hiine
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "gs_products",
});

// Herew databaseei holbogdwol Doorhiig hewlene.
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log("Amjilttai holbogdloo");
});

//Database-d baigaa bvh datag haruulnaa
router.get("/", (req, res) => {
  var sqlquery = "SELECT * FROM products";
  var msg = [req.body];
  db.query(sqlquery, msg, (err, result) => {
    if (err) {
      throw err;
    } else {
      var all = [];
      var i = 0;
      for (const row of result) {
        var products = {};
        products.src = row.products_src;
        products.alt = row.products_alt;
        products.name = row.products_name;
        products.price = row.products_price;
        products.bonus = row.products_bonus;
        all[i++] = products;
      }
      res.send(all);
    }
  });
});

router.get("/product1plus1", (req, res) => {
  var sqlquery =
    "SELECT products_alt,products_name,products_src,products_price,products_bonus FROM products WHERE products_bonus = '1+1' ";
  var msg = [req.body];
  db.query(sqlquery, msg, (err, result) => {
    var plus1to1 = [];
    var i = 0;
    for (const row of result) {
      var products = {};
      products.src = row.products_src;
      products.alt = row.products_alt;
      products.name = row.products_name;
      products.price = row.products_price;
      products.bonus = row.products_bonus;
      plus1to1[i++] = products;
    }
    res.send(plus1to1);
  });
});

// router.get("/product1plus1", (req, res) => {
//   var sqlquery =
//     "SELECT products_alt,products_name,products_src,products_price,products_bonus FROM products WHERE products_bonus = '1+1' ";
//   var msg = [req.body];
//   db.query(sqlquery, msg, (err, result) => {
//     if (err) {
//       console.log("error", err);
//     } else {
//       res.send(result);
//     }
//   });
// });

// router.get("/product1plus1", (req, res) => {
//   res.setHeader("content-type", "application/json");
//   // let product = [
//   //   {
//   //     src: "img/product-img/product-bonus-chips1.webp",
//   //     alt: "chips",
//   //     name: "???????? Realprice ????????????????????????",
//   //     price: "7,900???",
//   //     bonus: "1+1",
//   //   },
//   //   {
//   //     src: "img/product-img/product-bonus-fishka1.webp",
//   //     alt: "fishka",
//   //     name: "?????????? Fishka ?????????????????? 50????",
//   //     price: "1,800???",
//   //     bonus: "1+1",
//   //   },
//   //   {
//   //     src: "img/product-img/product-bonus-drink1.webp",
//   //     alt: "juice",
//   //     name: "???????? YouUs ???????? 330????",
//   //     price: "1,400???",
//   //     bonus: "1+1",
//   //   },
//   //   {
//   //     src: "img/product-img/product-bonus-water.webp",
//   //     alt: "water",
//   //     name: "???? Aqua Se 500????",
//   //     price: "9,500???",
//   //     bonus: "1+1",
//   //   },
//   //   {
//   //     src: "img/product-img/product-bonus-honey.webp",
//   //     alt: "honey",
//   //     name: "?????????????? ???????????? ?????? 10????",
//   //     price: "1,600???",
//   //     bonus: "1+1",
//   //   },
//   //   {
//   //     src: "img/product-img/product-bonus-belengoimon1.webp",
//   //     alt: "noodle",
//   //     name: "?????????? ???????????? Chow mein 110??",
//   //     price: "5,100???",
//   //     bonus: "1+1",
//   //   },
//   //   {
//   //     src: "img/product-img/product-bonus-suu1.webp",
//   //     alt: "milk",
//   //     name: "?????? ???????? ?????????? ?????? 180 ????",
//   //     price: "1,700???",
//   //     bonus: "1+1",
//   //   },
//   //   {
//   //     src: "img/product-img/product-bonus-suu2.webp",
//   //     alt: "milk",
//   //     name: "?????? ???????? ???????? ?????????? 180 ????",
//   //     price: "1,700???",
//   //     bonus: "1+1",
//   //   },
//   // ];
//   db.query(
//     `SELECT products_alt,products_name,products_src,products_price,products_bonus FROM products WHERE products_bonus = '1+1'`,
//     (err, data) => {
//       var product = [];
//       var i = 0;
//       for (const row of data) {
//         var items = {};
//         items.src = row.products_src;
//         items.alt = row.products_alt;
//         items.name = row.products_name;
//         items.price = row.products_price;
//         items.bonus = row.products_bonus;
//         product[i++] = items;
//       }
//       res.status(200).json(product);
//       //   res.status(200).send("jja");
//     }
//   );
// });

module.exports = router;
