const express = require("express");
const Resume = require("../../models/resumesModel");
const { default: mongoose } = require("mongoose");
const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const newResume = new Resume(req.body);
    const savedResume = await newResume.save();
    res.status(201).json(savedResume);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// / /Update a resume by ID
router.put("/:resumeId", async (req, res) => {
  const { resumeId } = req.params;
  console.log(resumeId == "6682ead98cc4879bb5904f4e", resumeId);
  try {
    if (!mongoose.Types.ObjectId.isValid(resumeId)) {
      return res.status(400).json({ message: "Invalid resumeId format" });
    }

    const updatedResume = await Resume.findByIdAndUpdate(resumeId, req.body, {
      new: true,
    });

    if (!updatedResume) {
      return res.status(404).json({ message: "Resume not found" });
    }

    res.json(updatedResume);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// edit
router.get("/:userEmail", async (req, res) => {
  const { userEmail } = req.params;
  console.log(userEmail);
  try {
    const resumes = await Resume.find({ userEmail });
    res.status(200).json(resumes);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

//fineOne to view
router.get("/:resumeId", async (req, res) => {
  const { resumeId } = req.params;
  console.log(resumeId);
  try {
    const resumes = await Resume.findOne({ resumeId });
    res.status(200).json(resumes);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

module.exports = router;
