const express = require("express");
const crypto = require("crypto");
const router = express.Router();
const MagnetSubmission = require("../models/magnets");

const { Paystack } = require("paystack-sdk");
const paystack = new Paystack(process.env.PAYSTACK_SECRET_KEY);

router.post("/paystack-webhook", express.json(), async (req, res) => {
  try {
    const secret = process.env.PAYSTACK_SECRET_KEY;

    const hash = crypto
      .createHmac("sha512", secret)
      .update(JSON.stringify(req.body))
      .digest("hex");

    if (hash !== req.headers["x-paystack-signature"]) {
      return res.status(401).json({ error: "Invalid signature" });
    }

    const event = req.body;

    if (event.event === "charge.success") {
      const reference = event.data.reference; // Paystack payment reference
      const metadata = event.data.metadata; // Assuming you passed order ID in metadata

      const submission = await MagnetSubmission.findById(metadata.orderId);

      if (!submission) {
        return res.status(404).json({ error: "Submission not found" });
      }

      // Update submission/payment status
      submission.paid = true;
      submission.paymentReference = reference;
      submission.paidAt = new Date();
      await submission.save();

      console.log("Payment verified and submission updated");
    }

    res.status(200).send("Webhook received");
  } catch (error) {
    console.error("Error handling webhook", error);
    res.status(500).send("Internal Server Error");
  }
});

console.log(paystack.transaction, 10000);

// Verify payment
router.get("/verify-payment/:reference", async (req, res) => {
  const { reference } = req.params;

  try {
    const response = await paystack.transaction.verify(reference);
    const data = response.body.data;

    if (data.status === "success") {
      const submission = await MagnetSubmission.findById(data.metadata.orderId);
      if (submission) {
        submission.isPaid = true;
        submission.paymentReference = reference;
        submission.paidAt = new Date();
        await submission.save();
      }
      return res.status(200).json({ message: "Payment verified", submission });
    }

    res.status(400).json({ error: "Payment not successful" });
  } catch (error) {
    console.error("Error verifying payment:", error);
    res.status(500).json({ error: "Failed to verify payment" });
  }
});

module.exports = router;
