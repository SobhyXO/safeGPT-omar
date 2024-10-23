import axios from 'axios';

const BASE_URL = `http://localhost:5001/api`; // Adjust the URL according to your backend

// Register user

export const api = {
    register: async (formData) => {
        const response = await axios.post(`${BASE_URL}/users/register`, formData);
        return response.data;
    },
    login : async (userData) => {
        const response = await axios.post(`${BASE_URL}/users/login`, userData);
        return response.data;
    },
    chat : async (body, headers) => {
        const response = await axios.post(`${BASE_URL}/chat/ask`, body, { headers });
        return response.data;
    }
};