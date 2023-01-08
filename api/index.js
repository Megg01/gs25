const express = require("express");
const app = express();
//localhost-iig asah post ni
const port = 2000;
const product = require("./module/products.js");
const cors = require("cors");

app.use(cors());
app.use("/", product);
app.use("/products", product);
app.listen(port, () => {
  console.log(`Server is listening at http: //localhost: ${port}`);
});
