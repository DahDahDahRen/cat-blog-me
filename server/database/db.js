const mongoose = require("mongoose");

const db = async () => {
  try {
    console.log("Successfully connected to DB.");
    await mongoose.connect(process.env.MONGO_DB_URL);
  } catch (error) {
    console.log(error);
  }
};

module.exports = db;
