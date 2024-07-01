// Import packages
const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const connectDB = require("./config/db");
const home = require("./routes/home");
const sigin = require("./routes/auth/singin")
const sigup = require("./routes/auth/singup")
const formchatSchema = require("./routes/chat/formchatSchema")

require("dotenv").config();


// Middlewares
connectDB();
const app = express();
app.use(express.json());
app.use(cors());
// Increase the limit of the body-parser
app.use(bodyParser.json({ limit: '10mb' })); // Adjust the limit as needed
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

// Routes
app.use("/api/home", home);
app.use("/api/singin",sigin)
app.use("/api/singup",sigup)
app.use("/api/FormchatSchema",formchatSchema)

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));
