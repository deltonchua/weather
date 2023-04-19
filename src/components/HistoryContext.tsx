'use client';

import useLocalStorage from '@/hooks/useLocalStorage';
import { History } from '@/types';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
} from 'react';

const HistoryContext = createContext<{
  history: History[];
  setHistory: Dispatch<SetStateAction<History[]>>;
}>({ history: [], setHistory: () => {} });

export const useHistory = () => useContext(HistoryContext);

export const HistoryProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [history, setHistory] = useLocalStorage<History[]>('searchHistory', []);

  return (
    <HistoryContext.Provider value={{ history, setHistory }}>
      {children}
    </HistoryContext.Provider>
  );
};
