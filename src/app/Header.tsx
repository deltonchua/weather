'use client';

import { FormEvent, useState } from 'react';
import countries from '@/db/countries.json';
import { useWeather } from '@/components/WeatherContext';

export default function Header() {
  const [city, setCity] = useState('');
  const [country, setCountry] = useState('');
  const { getWeather } = useWeather();

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!city || !country) return;
    const q = `${city.replace(/,/g, '')},${country}`;
    getWeather(q);
  };

  return (
    <header>
      <form onSubmit={onSubmit} className='flex items-center gap-2 sm:gap-4'>
        <label className='relative flex-1'>
          <small
            className={`absolute left-3 sm:left-5 top-1 text-black/40 text-[0.5rem] sm:text-[0.65rem] dark:text-white/40 ${
              city ? 'block' : 'hidden'
            }`}
          >
            City
          </small>
          <input
            type='text'
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className='input'
            placeholder='City'
            required
          />
        </label>
        <select
          required
          className='input max-w-[5.5rem] sm:max-w-[7.5rem]'
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value=''>Country</option>
          {countries.map(({ Code, Name }) => (
            <option value={Code} key={Code}>
              {Name}
            </option>
          ))}
        </select>
        <button type='submit' className='btn'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-5 sm:w-6 h-5 sm:h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
            />
          </svg>
        </button>
      </form>
    </header>
  );
}
