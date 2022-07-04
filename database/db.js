const mongoose = require("mongoose");
const mongo_url =
  "mongodb+srv://donateloz:y9r_aFBrxs7NeKT@cluster0.xdo0zqj.mongodb.net/?retryWrites=true&w=majority";

const db = async () => {
  await mongoose
    .connect(mongo_url)
    .then(() => console.log("Database running"))
    .catch((error) => console.error(error));
};

module.exports = db;
