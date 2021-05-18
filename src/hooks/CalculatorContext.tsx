import React, { createContext, useCallback, useContext, useState } from 'react';
import Cookies from 'js-cookie';

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
  const [eletronicItems, setEletronicItems] = useState<EletronicItem[]>(() => {
    const localStorageItems = Cookies.get("@SaveEnergyCalculator:eletronicItems");
  
    if (localStorageItems) {
      return JSON.parse(localStorageItems);
    }

    return [{} as EletronicItem];
  }); 
  
  const updateEletronicItems = useCallback((eletronicItems: Omit<EletronicItem, "kWh">[]) => {
    const formattedEletronicItems = eletronicItems.map(eletronicItem => {
      const kWh = (Number(eletronicItem.power) * Number(eletronicItem.hours)) / 1000;

      return {
        ...eletronicItem,
        kWh: String(kWh),
      }
    });
    Cookies.set("@SaveEnergyCalculator:eletronicItems", JSON.stringify(formattedEletronicItems));
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