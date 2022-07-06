const express = require("express");
const router = express.Router();
const controllers = require("../controllers");

router.get("/", function (req, res) {
  res.send("hello developer");
});
router.get("/product/:id", controllers.get);
router.post("/product", controllers.insert);
router.put("/product/:id", controllers.update);

module.exports = router;
