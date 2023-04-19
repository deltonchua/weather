import { Inter } from 'next/font/google';
import Header from './Header';
import Providers from './providers';
import Toast from './Toast';
import './globals.css';

export const metadata = {
  title: "Today's Weather",
  description: 'Look up local weather.',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={inter.className}>
      <link
        rel='icon'
        href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⛅</text></svg>'
      ></link>
      <body className='bg-light bg-center bg-cover bg-no-repeat bg-fixed container sm:p-6 dark:bg-dark dark:text-white'>
        <Providers>
          <Header />
          {children}
          <Toast />
        </Providers>
      </body>
    </html>
  );
}
