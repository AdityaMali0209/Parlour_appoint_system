const express = require("express");
const mongoose = require("mongoose");

const app = express();
const User = require("./models/user.js");

const port = 4000;
const MONGO_URL = "mongodb://127.0.0.1:27017/Parlour";

mongoose.connect(MONGO_URL)
.then(() => console.log("connected to DB"))
.catch(err => console.log(err));

app.listen(port, () => {
  console.log(`server is start : ${port}`);
});

app.get("/user", async (req, res) => {
  try {

    const newUser = new User({
      name: "Adity mali",
      email: "am20@gmail.com",
      password: "12345678",
      address: "Atapadi",
      phone: 457636
    });

    const savedUser = await newUser.save();

    console.log(savedUser);
    res.send("data saved");

  } catch (err) {
    console.log(err);
    res.status(500).send("error while saving");
  }
});
