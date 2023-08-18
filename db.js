const mongoose = require("mongoose");
require("dotenv").config();
const connectwithDB = mongoose.connect(process.env.mongoURL);

module.exports={
    connectwithDB
}