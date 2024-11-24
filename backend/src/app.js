//imports from libraries and modules
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//import Routes
const authRouter = require("./routes/v1/auth.routes");

const healthCheckRoutes = require("./routes/v1/healthcheck.routes");
const { errorHandler } = require("./middleware/errorHandler");
app.use("/api/v1/healthcheck", healthCheckRoutes);
app.use("/api/v1/auth", authRouter);
app.use(errorHandler);


module.exports = app;
