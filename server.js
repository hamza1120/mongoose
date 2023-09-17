const express = require("express");
const app = express();
const PORT = 5000;
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://hamzabouhouchi02:12345678@cluster0.1tuffjy.mongodb.net/mongoose workshop?retryWrites=true&w=majority"
  )
  .then(() => console.log("database connect"))
  .catch((err) => {
    if (err) throw err;
  });

app.use("/api", require("./routes/contactRoutes"));

app.listen(PORT, () => console.log("listening en port", PORT));
