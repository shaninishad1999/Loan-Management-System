import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const UserAccount = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUser, setEditedUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    village: "",
    city: "",
    state: "",
    fullAddress: "",
    password: "",
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No token found. Please log in.");
          setLoading(false);
          return;
        }

        console.log("Token found in localStorage:", token);

        const response = await axios.get(`http://localhost:6050/api/users/user-details`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        });

        console.log("User data from API:", response.data);

        setUser(response.data.data);
        setEditedUser({
          fullName: response.data.data.fullName || "",
          email: response.data.data.email || "",
          phone: response.data.data.phone || "",
          dob: response.data.data.dob ? new Date(response.data.data.dob).toISOString().split('T')[0] : "",
          village: response.data.data.village || "",
          city: response.data.data.city || "",
          state: response.data.data.state || "",
          fullAddress: response.data.data.fullAddress || "",
          password: "",
        });
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to load user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  const handleChange = (e) => {
    setEditedUser({ ...editedUser, [e.target.name]: e.target.value });
  };

  const handleEditClick = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get(`http://localhost:6050/api/users/user-details`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const userData = response.data.data;
      setEditedUser({
        ...userData,
        dob: userData.dob ? new Date(userData.dob).toISOString().split('T')[0] : "",
        password: "",
      });
      setIsEditing(true);
    } catch (error) {
      console.error("Error fetching user data:", error);
      alert("Failed to load user data.");
    }
  };
  
  const handleSave = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No token found. Please log in.");
        return;
      }
  
      // Ensure user ID is valid
      if (!user?._id || user._id.length !== 24) {
        alert("Invalid User ID");
        return;
      }
      
  
      const response = await axios.put(`http://localhost:6050/api/users/update/${user._id}`, editedUser, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      console.log("API Response:", response.data); // Debugging response
  
      setUser(response.data.updatedUser);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error.response?.data || error);
      alert(error.response?.data?.message || "Failed to save changes.");
    }
  };
  

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className="lg:mt-14 mt-14 max-w-3xl mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">User Account</h1>
      {error && <p className="text-red-600 text-center">{error}</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {["fullName", "email", "phone", "dob", "village", "city", "state", "fullAddress"].map((field) => (
          <div key={field} className="space-y-4">
            <label className="block text-sm font-medium text-gray-700">
              {field.charAt(0).toUpperCase() + field.slice(1)}
            </label>
            <input
              type={field === "dob" ? "date" : "text"}
              name={field}
              value={editedUser[field] || ""}
              placeholder={field === "fullName" || field === "email" ? "" : `Enter ${field}`}
              onChange={handleChange}
              readOnly={!isEditing || field === "fullName" || field === "email"} // ✅ Full name & email are read-only
              className={`w-full p-2 border rounded-lg bg-gray-100 text-gray-900 ${
                !isEditing || field === "fullName" || field === "email" ? "outline-none" : "outline outline-blue-500"
              }`}
            />
          </div>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
          Change Password
        </button>
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <button
          onClick={isEditing ? handleSave : handleEditClick}
          className={`w-full py-2 px-4 rounded ${
            isEditing ? "bg-green-500 hover:bg-green-600" : "bg-yellow-500 hover:bg-yellow-600"
          } text-white`}
        >
          {isEditing ? "Save Changes" : "Edit Profile"}
        </button>
        <button
          onClick={handleLogout}
          className="w-full bg-red-600 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default UserAccount;