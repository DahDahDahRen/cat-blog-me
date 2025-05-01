const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const morgan = require("morgan");
const notFound = require("./middleware/notFoundRoute");
const errorHandler = require("./middleware/errorHandler");
const authRoutes = require("./routes/auth.routes");
const catRoutes = require("./routes/cat.routes");
const db = require("./database/db");
const app = express();
const port = process.env.PORT || 8000;

dotenv.config();

// App level middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));

// Routes
app.use("/api/v1/cat/auth", authRoutes);
app.use("/api/v1/cat/meow", catRoutes);

// Error handler and notfound middleware
app.use(notFound);
app.use(errorHandler);

// Start Database
const startServer = async () => {
  try {
    await db();

    app.listen(port, () => {
      console.log(`Connecting in http://localhost:${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
