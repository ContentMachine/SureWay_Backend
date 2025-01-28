const mongoose = require("mongoose");

const contactUsSubmissionSchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  phone: { type: String, required: true },
  assistance: { type: String, required: true, enum: ["yes", "no"] },
});

module.exports = {
  ContactUs: mongoose.model("ContactUs", contactUsSubmissionSchema),
};
