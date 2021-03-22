import React, { createContext, useContext } from 'react';

interface CalculatorContextData {
  eletronicItens: object[];
}

const CalculatorContext = createContext<CalculatorContextData>(
  {} as CalculatorContextData
);

export const CalculatorProvider: React.FC = ({ children }) => {
  return (
    <CalculatorContext.Provider value={{ eletronicItens: [{}]}}>
      {children}
    </CalculatorContext.Provider>
  );
}

export function useCalculator(): CalculatorContextData {
  const context = useContext(CalculatorContext);

  if(!context) {
    throw new Error('useCalculator must be used within an CalculatorProvider')
  }

  return context;
}