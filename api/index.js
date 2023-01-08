const express = require("express");
const mysql = require("mysql");
const app = express();
//localhost-iig asah post ni
const port = 2000;

// BackEnd codiig module-chlah
const router = express.Router();

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

// app.get("/insert1", (req, res) => {
//   let sql = ``;
//   con.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("result");
//     res.send("selected");
//   });
// });
app.get("/", (req, res) => {});
app.listen(port, () => {
  console.log(`Server is listening at http: //localhost:port`);
});
