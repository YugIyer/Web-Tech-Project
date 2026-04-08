const express = require("express");
const router = express.Router();
const Student = require("../models/Student");
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post("/", upload.single("image"), async (req, res) => {
  try {
    const data = {
      ...req.body,
      subjects: JSON.parse(req.body.subjects),
      image: req.file ? req.file.filename : null,
    };

    const student = new Student(data);
    await student.save();

    res.json(student);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Error saving student" });
  }
});

module.exports = router;