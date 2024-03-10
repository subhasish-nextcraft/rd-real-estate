'use client';

import { isSidebarOpenAtom } from 'context/atoms';
import { AnimatePresence, motion } from 'framer-motion';
import { useAtom } from 'jotai';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from 'ui/Button';

const navLinks = [
  { route: '/', label: 'Home' },
  { route: '/about', label: 'About Us' },
  { route: '/services', label: 'Services' },
  { route: '/buy', label: 'Buy' },
  { route: '/rent', label: 'Rent' },
  { route: '/blogs', label: 'Blogs' },
  { route: '/portfolio', label: 'Portfolios' },
];

export default function Nav() {
  const [isSidebarOpen, setIsSidebarOpen] = useAtom(isSidebarOpenAtom);

  const pathname = usePathname();

  return (
    <>
      <div className="drop-shadow-[0px_4px_6px_rgba(0,0,0,0.25)] gradient fixed top-0 h-[5.25rem] w-full z-40 transition md:rounded-b-[2.5rem] lg:rounded-b-[2.75rem] xl:rounded-b-full">
        <div className="max-w-[92rem] mx-auto h-full">
          <div className="container mx-auto flex justify-between gap-4 items-center h-full px-4">
            <Link href="/">
              <div className="flex flex-col items-center gap-[1px]">
                <img
                  className="size-16"
                  src="/global/logo.svg"
                  alt=""
                />
                <p className="text-white text-center text-xs font-bold hidden lg:block">
                  OASIS HOMES PROPERTY
                </p>
              </div>
            </Link>

            <div className="flex gap-6 justify-between items-center">
              <div className="gap-4 hidden lg:flex">
                {navLinks.map((item) => (
                  <Link
                    key={item.route}
                    className="text-lg font-medium gap-[2px]"
                    href={item.route}
                  >
                    <div className="flex flex-col">
                      <p className="whitespace-nowrap text-white">{item.label}</p>
                      {((pathname.startsWith('/blogs')
                        && item.route === '/blogs')
                        || pathname === item.route) && (
                        <div className="w-full bg-white h-[5px] rounded-full" />
                      )}
                    </div>
                  </Link>
                ))}
              </div>
              <div className="flex-none hidden xl:block">
                <Button white>Post Your Property</Button>
              </div>
            </div>

            <div className="hidden sm:block">
              <Button shadow curved bold gradient>
                Reach Us
              </Button>
            </div>

            <button
              onClick={() => setIsSidebarOpen(true)}
              type="button"
              className="md:hidden h-8 w-8 text-white"
              aria-label="menu"
            >
              <svg
                className="w-full h-full flex-none"
                fill="none"
                strokeWidth={2}
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence mode="sync">
        {isSidebarOpen && (
          <motion.div
            initial={{
              x: '100%',
            }}
            animate={{
              x: 0,
            }}
            transition={{
              duration: 0.2,
              ease: 'easeOut',
              // type: 'spring',
            }}
            exit={{
              x: '100%',
            }}
            className="fixed top-0 right-0 h-screen overflow-y-auto z-50 w-[16rem] bg-white py-8 shadow-md px-8 md:hidden"
          >
            <div className="relative">
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="absolute right-0"
                type="button"
                aria-label="close"
              >
                <svg
                  fill="none"
                  className="text-red-500 h-8 w-8"
                  strokeWidth={2}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-4 mt-10">
              {navLinks.map((item) => (
                <Link
                  key={item.route}
                  className={`${
                    pathname === item.route && 'text-pry-700 font-bold'
                  } text-lg text-pry-700 hover:underline underline-offset-2`}
                  href={item.route}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
