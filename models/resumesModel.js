const mongoose = require("mongoose");

// Main schema
const resumeSchema = new mongoose.Schema({
  resumeId: { type: String, required: true },
  title: { type: String, required: true },
  userEmail: { type: String, required: true },
  userName: { type: String, required: true },
  summary: { type: String },
  // Personal Detail
  personal: {
    firstName: { type: String },
    lastName: { type: String },
    jobTitle: { type: String },
    address: { type: String },
    phone: { type: String, match: /^[0-9]{10}$/ },
    email: { type: String, match: /.+\@.+\..+/ },
    themeColor: {
      type: String,
      default: "#000000",
      match: /^#[0-9A-Fa-f]{6}$/,
    },
    isExperience: { type: Boolean, default: false },
    github: { type: String },
    linkedin: { type: String },
  },
  projects: [
    {
      id: { type: mongoose.Schema.Types.ObjectId },
      title: { type: String },
      summary: { type: String },
      startDate: { type: String },
      endDate: { type: String, default: "" },
    },
  ],
  experience: [
    {
      id: { type: Number },
      title: { type: String },
      companyName: { type: String },
      city: { type: String },
      state: { type: String },
      startDate: { type: String },
      endDate: { type: String, default: "" },
      currentlyWorking: { type: Boolean },
      workSummary: { type: String },
    },
  ],
  education: [
    {
      id: { type: Number },
      universityName: { type: String },
      startDate: { type: String },
      endDate: { type: String },
      degree: { type: String },
      major: { type: String },
      description: { type: String },
      cgpa: { type: String },
    },
  ],
  skills:{
    technicalSkills:[{type: String}],
    softSkills:[{type: String}]
  }

});

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
