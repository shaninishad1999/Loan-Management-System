import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

export const registerUser = async (userData) => {
  return await axios.post(`${API_BASE_URL}/users/register`, userData);
};

export const loginUser = async (loginData) => {
  return await axios.post(`${API_BASE_URL}/users/login`, loginData);
};

export const applyLoan = async (loanData, token) => {
  return await axios.post(`${API_BASE_URL}/loans/apply`, loanData, {
    headers: { Authorization: `Bearer ${token}` },
  });
};
