import React, { createContext, useCallback, useContext, useState } from 'react';

interface EletronicItem {
  name: string;
  power: string;
  hours: string;
  kWh: string;
}
interface CalculatorContextData {
  eletronicItems: EletronicItem[];
  updateEletronicItems(eletronicItems: Omit<EletronicItem, "kWh">[]): void;
}

const CalculatorContext = createContext<CalculatorContextData>(
  {} as CalculatorContextData
);

export const CalculatorProvider: React.FC = ({ children }) => {
  const [eletronicItems, setEletronicItems] = useState<EletronicItem[]>([{} as EletronicItem]); 
  
  const updateEletronicItems = useCallback((eletronicItems: Omit<EletronicItem, "kWh">[]) => {
    const formattedEletronicItems = eletronicItems.map(eletronicItem => {
      const kWh = (Number(eletronicItem.power) * Number(eletronicItem.hours)) / 1000;

      return {
        ...eletronicItem,
        kWh: String(kWh),
      }
    });
    console.log(formattedEletronicItems);
    setEletronicItems(formattedEletronicItems);
  }, [])

  return (
    <CalculatorContext.Provider value={{ eletronicItems, updateEletronicItems}}>
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