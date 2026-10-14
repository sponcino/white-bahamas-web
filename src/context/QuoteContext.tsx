'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { QuoteRequest } from '@/types/product';

interface QuoteContextType {
  isOpen: boolean;
  quoteData: QuoteRequest;
  openQuote: (initialData?: Partial<QuoteRequest>) => void;
  closeQuote: () => void;
  setQuoteData: React.Dispatch<React.SetStateAction<QuoteRequest>>;
}

const defaultQuoteData: QuoteRequest = {
  customerName: '',
  customerLocation: '',
  customerPhone: '',
  customerEmail: '',
  notes: '',
  projectType: 'particular',
};

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [quoteData, setQuoteData] = useState<QuoteRequest>(defaultQuoteData);

  const openQuote = (initialData?: Partial<QuoteRequest>) => {
    if (initialData) {
      setQuoteData((prev) => ({
        ...prev,
        ...initialData,
      }));
    }
    setIsOpen(true);
  };

  const closeQuote = () => {
    setIsOpen(false);
  };

  return (
    <QuoteContext.Provider value={{ isOpen, quoteData, openQuote, closeQuote, setQuoteData }}>
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error('useQuote must be used within a QuoteProvider');
  }
  return context;
}
