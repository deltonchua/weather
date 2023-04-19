'use client';

import { HistoryProvider } from '@/components/HistoryContext';
import { ToastProvider } from '@/components/ToastContext';
import { WeatherProvider } from '@/components/WeatherContext';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ToastProvider>
      <HistoryProvider>
        <WeatherProvider>{children}</WeatherProvider>
      </HistoryProvider>
    </ToastProvider>
  );
}
