const express = require("express");
const cors = require("cors");
const db = require("./database/db");

const controllers = require("./controllers");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/", function (req, res) {
  res.send("hello developer");
});
app.get("/product/:id", controllers.get);
app.post("/product", controllers.insert);
app.put("/product/:id", controllers.update);

//const port = 4100;
const PORT = process.env.PORT || 4100;

app.listen(PORT, () => {
  console.log(`Nodejs Application running`);
  db();
});

module.exports = app;
