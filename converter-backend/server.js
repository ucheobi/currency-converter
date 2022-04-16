const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const transactionRoute = require("./route/transaction")
const cors = require("cors");

dotenv.config();

mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("DB connection successful"))
    .catch((err) => console.error(err))

app.use(cors());
app.use(express.json());

app.use("/", transactionRoute);

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
