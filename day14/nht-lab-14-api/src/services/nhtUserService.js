import axios from "axios";

const API_URL = "https://67dbd2f01fd9e43fe476122b.mockapi.io/k23cnt2_nguyenhuythong/nht_users";

// Lấy danh sách user
export const getUsers = async () => {
  return axios.get(API_URL);
};

// Lấy chi tiết user theo ID
export const getUserById = async (id) => {
  return axios.get(`${API_URL}/${id}`);
};

// Thêm user mới
export const createUser = async (user) => {
  return axios.post(API_URL, user);
};

// Cập nhật user
export const updateUser = async (id, user) => {
  return axios.put(`${API_URL}/${id}`, user);
};

// Xóa user
export const deleteUser = async (id) => {
  return axios.delete(`${API_URL}/${id}`);
};
