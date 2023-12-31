import './globals.css';
import { Inter } from 'next/font/google';
import Navigation from './components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kamalaya',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
      <head>
        <title>Hospice Kamalaya</title>
      </head>
      <body className={inter.className}>
       <Navigation/>
        {children}
      </body>
    </html>
  );
}
