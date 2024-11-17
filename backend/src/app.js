const express = require("express");
const app = express();

//import Routes
const healthCheckRoutes = require("./routes/v1/healthcheck.routes");

app.use("api/v1/healthcheck", healthCheckRoutes);

module.exports = app;