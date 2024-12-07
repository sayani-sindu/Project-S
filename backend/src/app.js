//imports from libraries and modules
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());
const { GameSocketService } = require("./config/socketio");
const http = require("http");
const httpServer = http.createServer(app);

//import Routes
const authRouter = require("./routes/v1/auth.routes");

const healthCheckRoutes = require("./routes/v1/healthcheck.routes");
const { errorHandler } = require("./middleware/errorHandler");
app.use("/api/v1/healthcheck", healthCheckRoutes);
app.use("/api/v1/auth", authRouter);
app.use(errorHandler);

const io = GameSocketService(httpServer);
io.on("connection", (socket) => {
  socket.emit("connected", "Hello World");
  
});

module.exports = { httpServer };
