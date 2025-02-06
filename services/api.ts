import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Replace with your Express server URL

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // 10 second timeout
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor for debugging
axiosInstance.interceptors.request.use(
  (config) => {
    console.log(`Making ${config.method.toUpperCase()} request to: ${config.url}`);
    return config;
  },
  (error) => {
    console.error('Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
axiosInstance.interceptors.response.use(
  (response) => {
    console.log(`Response from ${response.config.url}:`, response.status);
    return response;
  },
  (error) => {
    if (error.response) {
      // Server responded with error
      console.error('Response error:', {
        status: error.response.status,
        data: error.response.data,
        headers: error.response.headers
      });
    } else if (error.request) {
      // Request was made but no response
      console.error('No response received:', error.request);
    } else {
      // Error in request setup
      console.error('Request setup error:', error.message);
    }
    return Promise.reject(error);
  }
);

export const api = {
  // Carbon Credits
  getAvailableCredits: () => 
    axiosInstance.get('/credits/available'),
  
  purchaseCredits: (amount: number) => 
    axiosInstance.post('/credits/purchase', { amount }),
  
  // Transactions
  getTransactions: () => 
    axiosInstance.get('/transactions'),
  
  // Portfolio
  getPortfolio: () => 
    axiosInstance.get('/portfolio'),
}; 