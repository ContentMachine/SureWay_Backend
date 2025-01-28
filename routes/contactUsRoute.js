const express = require("express");
const router = express.Router();
const { ContactUs } = require("../models/contactUs");

// Submit a contact us request
router.post("/", async (req, res) => {
  try {
    const { fullName, emailAddress, phone, assistance } = req.body;

    if (!fullName || !emailAddress || !phone) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const contact = new ContactUs({
      fullName,
      emailAddress,
      phone,
      assistance,
    });

    const newResponse = await contact.save();

    res.status(201).json(newResponse);
  } catch (err) {
    console.error("Error in POST /api/contact-us:", err);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
