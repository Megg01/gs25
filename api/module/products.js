const express = require("express");
const mysql = require("mysql");
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
