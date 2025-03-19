import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const sendOtp = async (e) => {
    if (e) e.preventDefault();

    // Validate form before sending OTP
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setIsSubmitting(true);

      // Log the request for debugging
      console.log("Sending OTP request to:", "http://localhost:6050/send-otp");
      console.log("Request payload:", { email: formData.email });

      const response = await axios.post(
        "http://localhost:6050/send-otp",
        { email: formData.email },
        {
          headers: {
            "Content-Type": "application/json",
          },
          // Add timeout to prevent indefinite waiting
          timeout: 10000,
        }
      );

      console.log("OTP Response:", response); // Log full response

      if (response.data?.success) {
        setOtpSent(true);
        alert(
          response.data.message ||
            "OTP sent successfully! Please check your email."
        );
      } else {
        console.error("OTP response error:", response.data);
        alert(
          "Failed to send OTP: " +
            (response.data?.message ||
              "Server responded without success status")
        );
      }
    } catch (error) {
      console.error("Detailed error:", error);

      if (error.code === "ECONNREFUSED") {
        alert(
          "Cannot connect to the server. Please make sure the backend server is running."
        );
      } else if (error.code === "ERR_NETWORK") {
        alert("Network error. Please check your internet connection.");
      } else if (error.response) {
        // The server responded with a status code outside the 2xx range
        alert(
          `Server error (${error.response.status}): ${
            error.response.data?.message || "Unknown server error"
          }`
        );
      } else if (error.request) {
        // The request was made but no response was received
        alert(
          "No response from server. Please check if the backend is running."
        );
      } else {
        // Something else happened while setting up the request
        alert("Error sending OTP: " + error.message);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const verifyOtpAndRegister = async () => {
    if (!otp.trim()) {
      alert("Please enter the OTP");
      return;
    }

    setIsVerifying(true);

    try {
      // First verify OTP
      const otpResponse = await axios.post("http://localhost:6050/verify-otp", {
        email: formData.email,
        otp,
      });

      if (otpResponse.data.success) {
        // Then proceed with registration
        const response = await axios.post(
          "http://localhost:6050/api/users/register",
          {
            fullName: formData.fullName,
            email: formData.email,
            password: formData.password,
          }
        );

        if (response.status === 201) {
          setRegistrationSuccess(true);
          localStorage.setItem("user", JSON.stringify(response.data));
          alert("Registration successful!");
          // Redirect or show success message
        }
      } else {
        alert("OTP verification failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration process:", error);
      alert(
        "Error: " +
          (error.response?.data?.message ||
            error.message ||
            "Registration failed")
      );
    } finally {
      setIsVerifying(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  if (registrationSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full bg-gray-900 rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Registration Successful!
          </h2>
          <p className="text-gray-300 mb-6">
            Your account has been created successfully.
          </p>
          <Link
            to="/myaccount"
            className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md"
          >
            Go to Profile
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4">
      <div className="max-w-md w-full space-y-7 mt-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">Create your account</h2>
          <p className="mt-2 text-sm text-gray-400">
            Join us today and start your journey
          </p>
        </div>

        <div className="bg-gray-900 rounded-lg shadow-xl p-8">
          {!otpSent ? (
            <form className="space-y-6" onSubmit={sendOtp}>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaUser className="text-gray-500" />
                    </div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="block w-full pl-10 p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  {errors.fullName && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.fullName}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-gray-500" />
                    </div>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full pl-10 p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-500">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-500" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full pl-10 p-3 pr-10 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={togglePasswordVisibility}
                        className="text-gray-400 hover:text-gray-300 focus:outline-none"
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                  {errors.password && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.password}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-gray-500" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="block w-full pl-10 p-3 pr-10 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                      <button
                        type="button"
                        onClick={toggleConfirmPasswordVisibility}
                        className="text-gray-400 hover:text-gray-300 focus:outline-none"
                      >
                        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                    </div>
                  </div>
                  {errors.confirmPassword && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.confirmPassword}
                    </p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md transition duration-200 flex items-center justify-center"
              >
                {isSubmitting ? "Sending OTP..." : "Continue"}
              </button>
            </form>
          ) : (
            <div className="space-y-4">
              <h3 className="text-xl font-medium text-white">
                Verify Your Email
              </h3>
              <p className="text-gray-400">
                We've sent a verification code to {formData.email}
              </p>

              <div>
                <label className="block text-sm font-medium text-gray-300">
                  Enter OTP
                </label>
                <input
                  type="text"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  className="block w-full p-3 rounded-md bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter the 6-digit code"
                />
              </div>

              <button
                onClick={verifyOtpAndRegister}
                disabled={isVerifying}
                className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-md transition duration-200 flex items-center justify-center"
              >
                {isVerifying ? "Verifying..." : "Complete Registration"}
              </button>

              <div className="text-center pt-2">
                <button
                  onClick={sendOtp}
                  disabled={isSubmitting}
                  className="text-blue-400 hover:text-blue-300 text-sm"
                >
                  Didn't receive code? Resend
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-3">
          <p className="text-gray-400">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-400 hover:text-blue-300">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
