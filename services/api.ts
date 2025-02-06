import axios from 'axios';

const BASE_URL = 'http://localhost:3000'; // Replace with your Express server URL

export const api = {
  // Carbon Credits
  getAvailableCredits: () => 
    axios.get(`${BASE_URL}/credits/available`),
  
  purchaseCredits: (amount: number) => 
    axios.post(`${BASE_URL}/credits/purchase`, { amount }),
  
  // Transactions
  getTransactions: () => 
    axios.get(`${BASE_URL}/transactions`),
  
  // Portfolio
  getPortfolio: () => 
    axios.get(`${BASE_URL}/portfolio`),
}; 