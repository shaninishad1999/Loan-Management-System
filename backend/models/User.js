// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//   fullName: { type: String,  },
//   email: { type: String,  unique: true },
//   password: { type: String,  },
  
// });

// const User = mongoose.model("User", UserSchema);
// module.exports = User;

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullName: { type: String, default: "" },
  email: { type: String, unique: true, default: "" },
  password: { type: String, default: "" },
  phone: { type: String, default: "" },
  dob: { type: Date, default: "" },
  address: { type: String, default: "" },
  loanAmount: { type: String, default: "" },
  loanStatus: { type: String, default: "" },
  dueDate: { type: String, default: "" },
  accountNumber: { type: String, unique: true, default: "" },
  totalLoans: { type: Number, default: 0 },
  creditScore: { type: Number, default: 0 },
  lastLogin: { type: String, default: "" },
  notificationPreference: { type: String, default: "" },
  kycStatus: { type: String, default: "" }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
