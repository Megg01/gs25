const express = require("express");
const app = express();
//localhost-iig asah post ni
const port = 2000;
const product = require("./module/products.js");
const cors = require("cors");

app.use(cors());
// "/" duudagdhad shuud product ajlana
app.use("/", product);
// "/product1plus1" duudagdhad shuud product ajlana
app.use("/product1plus1", product);
app.listen(port, () => {
  console.log(`Server is listening at http: //localhost: ${port}`);
});
