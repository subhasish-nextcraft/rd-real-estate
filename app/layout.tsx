import Footer from 'comp/Footer';
import Nav from 'comp/Nav';
import AuthProvider from 'context/AuthProvider';
import { Montserrat, Open_Sans } from 'next/font/google';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';
import Analytics from 'util/Analytics';
import './globals.css';

type Props = {
  children?: ReactNode;
};

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-opensans',
});

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default async function RootLayout({ children }: Props) {
  return (
    <html
      lang="en"
      className="scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thin scrollbar-thumb-pry-400 scrollbar-track-slate-200"
    >
      <Analytics />
      <body
        className={`font-sans ${montserrat.variable} ${openSans.variable} antialiased print:bg-secondary`}
      >
        <AuthProvider>
          <Toaster position="bottom-center" reverseOrder={false} />
          <Nav />
          <div className="min-h-screen pb-[0.75rem] md:pb-[1.5rem] lg:pb-[2.5rem] mx-auto">
            {children}
          </div>
          <div id="mainModalContainer" />
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}