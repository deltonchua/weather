import SearchHistory from './SearchHistory';
import LocalWeather from './LocalWeather';

export default async function Home() {
  return (
    <main className='text-sm sm:text-base mt-32 sm:mt-28 p-5 sm:p-10 bg-white/20 rounded-[1.25rem] sm:rounded-[2.5rem] border border-white/50 dark:border-none dark:bg-bgDark/30'>
      <LocalWeather />
      <SearchHistory />
    </main>
  );
}
