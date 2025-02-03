const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
const magnetRoutes = require("./routes/magnetRoutes");
const paymentRoute = require("./routes/paymentRoute");
const contactUsRoute = require("./routes/contactUsRoute");
const engravingsRoute = require("./routes/engravingsRoute");

mongoose
  .connect(process.env.MONGO_DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("MongoDB connection error:", error));

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Base route
app.get("/", (req, res) => {
  res.send("Sure way web api is running");
});

// Magnets
app.use(`/api/magnets`, magnetRoutes);
app.use(`/api/payment`, paymentRoute);
app.use(`/api/contact-us`, contactUsRoute);
app.use(`/api/contact-us`, contactUsRoute);
app.use(`/api/engravings`, engravingsRoute);

// Global error handler
app.use((err, req, res, next) => {
  console.error("Global Error Handler:", err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "An unexpected error occurred",
  });
});

// Handle 404 (route not found) as JSON
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

//Start server
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

server.setTimeout(120000);
