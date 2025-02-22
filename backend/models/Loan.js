const mongoose = require("mongoose");

const LoanSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  interestRate: { type: Number, required: true },
  duration: { type: Number, required: true }, // in months
  status: { type: String, enum: ["pending", "approved", "rejected"], default: "pending" },
  createdAt: { type: Date, default: Date.now },
});

const Loan = mongoose.model("Loan", LoanSchema);
module.exports = Loan;
