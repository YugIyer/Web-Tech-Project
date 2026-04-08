const mongoose = require("mongoose");

const StudentSchema = new mongoose.Schema({
  rollNo: {
    type: String,
    required: true,
    unique: true,
  },

  firstName: {
    type: String,
    required: true,
  },

  lastName: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  phone: {
    type: String,
    required: true,
  },

  dob: {
    type: String,
    required: true,
  },

  branch: {
    type: String,
    enum: ["CSE", "IT", "ECE", "Civil"],
    required: true,
  },

  subjects: {
    type: [String],
    required: true,
  },

  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },

  address: {
    type: String,
    required: true,
  },

  image: {
    type: String, // filename from multer
  },

}, { timestamps: true });

module.exports = mongoose.model("Student", StudentSchema);