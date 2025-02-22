// controllers/loanController.js
const Loan = require("../models/Loan");

exports.applyLoan = async (req, res) => {
  try {
    const { amount, interestRate, tenure } = req.body;
    const newLoan = new Loan({ user: req.user.id, amount, interestRate, tenure });
    await newLoan.save();
    res.status(201).json({ message: "Loan application submitted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getUserLoans = async (req, res) => {
  try {
    const loans = await Loan.find({ user: req.user.id });
    res.json(loans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};