'use client';

import Image from 'next/image';
import { formatTime } from '@/utils';
import { useWeather } from '@/components/WeatherContext';

const FICTIONAL_WEATHER = {
  clouds: { all: 40 },
  main: {
    temp: 30,
    temp_max: 32,
    temp_min: 28,
    humidity: 50,
  },
  weather: [{ main: 'Clouds' }],
  q: 'Raccoon City,US',
  time: 1681872216671,
};

export default function LocalWeather() {
  const { weather } = useWeather();

  const {
    clouds: { all: cloudiness },
    main: { temp, temp_max, temp_min, humidity },
    weather: description,
    q,
    time,
  } = weather || FICTIONAL_WEATHER;

  return (
    <section className='p-2 relative grid grid-cols-2 gap-2 sm:block'>
      <Image
        src={cloudiness > 50 ? '/cloud.png' : '/sun.png'}
        alt={cloudiness > 50 ? 'cloudy' : 'sunny'}
        width={280}
        height={280}
        className='h-auto w-40 sm:w-72 absolute top-[-6rem] right-[-1rem] sm:right-[-1.5rem] sm:top-[-8.25rem]'
      />
      <div>
        <p>Today&apos;s Weather</p>
        <p className='text-6xl sm:text-8xl font-bold text-primary dark:text-white'>
          {Math.round(temp)}°
        </p>
        <p>
          H: {Math.round(temp_max)}° L: {Math.round(temp_min)}°
        </p>
        <span className='sm:hidden font-bold text-grey mt-2 line-clamp-1 capitalize dark:text-white'>
          {q.replace(',', ', ')}
        </span>
      </div>
      <div className='mt-2 flex gap-1 flex-col-reverse justify-start items-end sm:flex-row sm:justify-between text-grey dark:text-white'>
        <div className='hidden sm:block'>
          <span className='font-bold line-clamp-1 capitalize'>
            {q.replace(',', ', ')}
          </span>
        </div>
        <span className='flex-shrink-0'>{formatTime(new Date(time))}</span>
        <span className='flex-shrink-0'>Humidity: {humidity}%</span>
        <span className='flex-shrink-0'>{description[0].main}</span>
      </div>
    </section>
  );
}
