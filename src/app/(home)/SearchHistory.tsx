'use client';

import { useHistory } from '@/components/HistoryContext';
import { useWeather } from '@/components/WeatherContext';
import { formatTime } from '@/utils';

export default function SearchHistory() {
  const { history, setHistory } = useHistory();
  const { getWeather } = useWeather();

  return (
    <section className='mt-4 p-4 sm:p-5 pb-12 sm:pb-12 bg-white/20 rounded-3xl dark:bg-bgDark/30'>
      <p className='mb-6'>Search History</p>
      {history.length ? (
        history.map(({ q, timestamp }, i) => (
          <div
            key={i}
            className='mt-4 sm:mt-5 p-3 bg-white/40 rounded-2xl flex gap-2 items-center justify-between dark:bg-bgDark/50'
          >
            <div className='block sm:flex gap-2 items-center justify-between flex-1'>
              <span className='line-clamp-1 capitalize'>
                {q.replace(',', ', ')}
              </span>
              <span className='text-xs sm:text-sm flex-shrink-0 dark:text-white/50'>
                {formatTime(new Date(timestamp))}
              </span>
            </div>
            <button
              title='Search'
              className='icon'
              onClick={() => {
                getWeather(q);
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-4 h-4'
              >
                <path
                  fillRule='evenodd'
                  d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
            <button
              title='Delete'
              className='icon'
              onClick={() => {
                setHistory((prev) => [
                  ...prev.slice(0, i),
                  ...prev.slice(i + 1),
                ]);
              }}
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 20 20'
                fill='currentColor'
                className='w-4 h-4'
              >
                <path
                  fillRule='evenodd'
                  d='M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z'
                  clipRule='evenodd'
                />
              </svg>
            </button>
          </div>
        ))
      ) : (
        <div>
          <div className='mt-4 sm:mt-5 p-3 bg-white/40 rounded-2xl flex gap-2 items-center justify-between dark:bg-bgDark/50 opacity-50'>
            Your search history goes here.
          </div>
        </div>
      )}
    </section>
  );
}
