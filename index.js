const express = require("express");
const cors = require("cors");
const { connectwithDB } = require("./db");
const { userRoute } = require("./Route/UserRoute");


const app = express();
app.use(express.json());
app.use(cors());
app.use("/", userRoute);

app.listen(8080,  async() => {
  try {
    await connectwithDB;
    console.log("server is running on port 8080");
    console.log("connected to the DB");
  } catch (error) {
    console.log(error);
  }
});
