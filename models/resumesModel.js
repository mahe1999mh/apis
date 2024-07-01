const mongoose = require("mongoose");

// Main schema
const resumeSchema = new  mongoose.Schema({
  resumeId: { type: String, required: true },
  title: { type: String, required: true },
  userEmail: { type: String, required: true },
  userName: { type: String, required: true },
  // Personal Detail
  firstName: { type: String },
  lastName: { type: String },
  jobTitle: { type: String },
  address: { type: String },
  phone: { type: String },
  email: { type: String },
  themeColor: { type: String },
  summary: { type: String },
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
    },
  ],
  skills: [
    {
      id: { type: Number },
      name: { type: String },
      rating: { type: Number },
    },
  ],
});

const Resume = mongoose.model("Resume", resumeSchema);

module.exports = Resume;
