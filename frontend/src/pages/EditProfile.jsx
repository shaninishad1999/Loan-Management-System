import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditProfile = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    village: "",
    city: "",
    state: "",
    fullAddress: "",
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:6050/api/users/", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setError("Failed to load user data");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      await axios.put("http://localhost:6050/api/users/update", user, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/myaccount");
    } catch (error) {
      console.error("Error updating user data:", error);
      setError("Failed to update user data");
    }
  };

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  }

  return (
    <div className=" lg:mt-14  mt-14 max-w-3xl mx-auto p-6 bg-gray-200 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Edit Profile</h1>
      {error && <p className="text-red-600 text-center">{error}</p>}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
        <input type="text" name="fullName" value={user.fullName} onChange={handleChange} placeholder="Full Name" className="w-full p-2 border rounded" />
        <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" className="w-full p-2 border rounded" />
        <input type="text" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" className="w-full p-2 border rounded" />
        <input type="date" name="dob" value={user.dob} onChange={handleChange} className="w-full p-2 border rounded text-gray-400" />
        <input type="text" name="village" value={user.village} onChange={handleChange} placeholder="Village" className="w-full p-2 border rounded" />
        <input type="text" name="city" value={user.city} onChange={handleChange} placeholder="City" className="w-full p-2 border rounded" />
        <input type="text" name="state" value={user.state} onChange={handleChange} placeholder="State" className="w-full p-2 border rounded" />
        <input type="text" name="fullAddress" value={user.fullAddress} onChange={handleChange} placeholder="Full Address" className="w-full p-2 border rounded" />
        <div className="col-span-2 flex flex-col gap-2 mt-4">
          <button type="submit" className="w-full bg-yellow-500 text-white py-2 px-4 rounded hover:bg-yellow-600">Save Changes</button>
          <button type="button" onClick={() => navigate("/myaccount")} className="w-full bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600">Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default EditProfile;