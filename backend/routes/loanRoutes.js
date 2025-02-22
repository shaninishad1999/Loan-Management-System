const express = require("express");
const { applyLoan, getUserLoans } = require("../controllers/loanController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/apply", authMiddleware, applyLoan);
router.get("/my-loans", authMiddleware, getUserLoans);

module.exports = router;
