const express = require("express");
const app = express();
//localhost-iig asah post ni
const port = 2000;

app.get("/", (req, res) => {});
app.listen(port, () => {
  console.log(`Server is listening at http: //localhost: ${port}`);
});
