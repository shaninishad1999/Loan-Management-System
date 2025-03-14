// controllers/userController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// Register new user
exports.register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ fullName, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Login user
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "User not found" });
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.json({ token, user });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get user data 
// Get logged-in user details
exports.getUser = async (req, res) => {
  try {
    const userId = req.user.id; // ✅ Correct usage

    console.log("Logged-in User ID:", userId);

    const user = await User.findById(userId).select("-password -refresh_token");

    if (!user) {
      return res.status(404).json({ message: "User not found", error: true, success: false });
    }

    return res.json({ message: "User details retrieved successfully", data: user, error: false, success: true });
  } catch (error) {
    console.error("Error fetching user details:", error);
    return res.status(500).json({ message: "Something went wrong", error: true, success: false });
  }
};




// Update user data
// exports.updateUser = async (req, res) => {
//   try {
//     const { fullName, email, phone, city, state, fullAddress } = req.body;
//     const updatedUser = await User.findByIdAndUpdate(
//       req.params.id,
//       { fullName, email, phone, city, state, fullAddress },
//       { new: true }
//     );
//     if (!updatedUser) return res.status(404).json({ message: "User not found" });
//     res.status(200).json({ message: "User updated successfully", updatedUser });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };


// Update user data
exports.updateUser = async (req, res) => {
  try {
    const { fullName, phone, city, state, dob, village, fullAddress } = req.body;
    const userId = req.params.id;

    // Check if user ID is valid
    if (!userId.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({ message: "Invalid user ID format" });
    }

    // Convert dob to a Date if it's a valid string
    const updateData = { fullName, phone, city, state, village, fullAddress };
    if (dob) {
      const parsedDOB = new Date(dob);
      if (!isNaN(parsedDOB.getTime())) {
        updateData.dob = parsedDOB;
      } else {
        return res.status(400).json({ message: "Invalid date format" });
      }
    }

    // Find user and update data
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User updated successfully", updatedUser });
  } catch (error) {
    console.error("Error updating user:", error);
    res.status(500).json({ message: "Internal server error", error: error.message });
  }
};

