const express = require("express");
const pg = require('pg');
const app = express();
const port = 5000;
app.get('/', (req, res) => {
res.send(`Hello`)
})
 
app.listen(port, () => {
        console.log(`Server is listening at http://localhost:5000`)
})