'use client';

import axios from 'axios';
import {
  Dispatch,
  SetStateAction,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';
import { Weather } from '@/types';
import { useHistory } from './HistoryContext';
import { useToast } from './ToastContext';

const WeatherContext = createContext<{
  weather?: Weather;
  setWeather: Dispatch<SetStateAction<Weather | undefined>>;
  getWeather: (q: string) => Promise<void>;
}>({
  weather: undefined,
  setWeather: () => {},
  getWeather: async () => {},
});

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [weather, setWeather] = useState<Weather | undefined>();
  const { setHistory } = useHistory();
  const { toast } = useToast();

  const getWeather = useCallback(
    async (q: string) => {
      if (!q) return;
      const res = (await axios.get(`/api/weather?q=${q}`)).data;
      if (res.error) {
        toast(res.error, 'error');
        return;
      }
      setWeather(res);
      setHistory((prev) => [{ q, timestamp: res.time }, ...prev]);
    },
    [toast, setWeather, setHistory]
  );

  return (
    <WeatherContext.Provider value={{ weather, setWeather, getWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};
