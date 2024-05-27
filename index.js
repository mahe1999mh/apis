// Import packages
const express = require("express");
const home = require("./routes/home");
const sigin = require("./routes/auth/singin")
const sigup = require("./routes/auth/singup")

// Middlewares
const app = express();
app.use(express.json());

// Routes
app.use("/api/home", home);
app.use("/api/singin",sigin)
app.use("/api/singup",sigup)

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
