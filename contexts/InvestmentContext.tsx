import React, { createContext, useState, useContext } from 'react';

interface Investment {
  projectTitle: string;
  amount: number;
  date: Date;
}

interface InvestmentContextType {
  investments: Investment[];
  addInvestment: (investment: Investment) => void;
  balance: number;
  setBalance: (balance: number) => void;
}

const InvestmentContext = createContext<InvestmentContextType | undefined>(undefined);

export function InvestmentProvider({ children }: { children: React.ReactNode }) {
  const [investments, setInvestments] = useState<Investment[]>([]);
  const [balance, setBalance] = useState(10000); // Initial balance

  const addInvestment = (investment: Investment) => {
    setInvestments(prev => [...prev, investment]);
  };

  return (
    <InvestmentContext.Provider value={{ investments, addInvestment, balance, setBalance }}>
      {children}
    </InvestmentContext.Provider>
  );
}

export function useInvestments() {
  const context = useContext(InvestmentContext);
  if (context === undefined) {
    throw new Error('useInvestments must be used within an InvestmentProvider');
  }
  return context;
} 