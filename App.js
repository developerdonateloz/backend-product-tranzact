const express = require("express");
const cors = require("cors");
const db = require("./database/db");

const app = express();

app.use(cors());
app.use(express.json());

app.use(require("./routes/routes"));

//const port = 4100;
const PORT = process.env.PORT || 4100;

app.listen(PORT, () => {
  console.log(`Nodejs Application running`);
  db();
});

module.exports = app;
