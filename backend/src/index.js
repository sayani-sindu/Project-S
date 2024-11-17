const express = require("express");
const app = express();

//import Routes
const healthCheckRoutes = require("./routes/healthcheck.routes");

app.use("api/v1/healthcheck", healthCheckRoutes);

app.listen(3000, () => {
  console.log("Server Started");
});
