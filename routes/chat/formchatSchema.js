const express = require("express");
const router = express.Router();
const FormchatSchema = require("../../models/adminModel");

router.post("/form", async (req, res) => {
  const { title, description, imageUrl } = req.body;

  try {
    const newForm = new FormchatSchema({
      title,
      description,
      imageUrl,
    });

    const savedForm = await newForm.save();

    res.status(201).json(savedForm);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get('/form', async (req, res) => {
  try {
    const forms = await FormchatSchema.find()?.sort({ createdAt: -1 });;
    res.status(200).json(forms);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
