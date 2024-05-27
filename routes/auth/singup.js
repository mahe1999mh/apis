const express = require("express");
const User = require("../../models/userModel");
const router = express.Router();
const express = require("express");

router.post("/", async (req, res, next) => {
  const { email, password, firstName, lastName } = req.body;

  try {
    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = new User({ email, password, firstName, lastName });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
