// Import packages
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const home = require("./routes/home");
const sigin = require("./routes/auth/singin")
const sigup = require("./routes/auth/singup")
require("dotenv").config();


// Middlewares
connectDB();
const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/home", home);
app.use("/api/singin",sigin)
app.use("/api/singup",sigup)

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
