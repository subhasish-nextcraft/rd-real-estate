import Link from 'next/link';
import Button from 'ui/Button';
import Pic from 'util/Pic';

export default function NotFound() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <div className="pb-[6rem] md:pb-[8rem] pt-[8.5rem] md:pt-[10.5rem]">
          <div className="flex flex-col justify-center items-center md:flex-row gap-8 md:gap-20 bg-white px-4">
            <div className="h-64 w-64 lg:h-72 lg:w-72">
              <Pic src="/not-found/404.svg" alt="404" />
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold tracking-tight text-slate-700 sm:text-4xl">
                Oh no!
              </h1>
              <p className="mt-3 text-slate-600">
                We can&apos;t find that page.
              </p>
              <p className="mt-7">
                <Link href="/">
                  <Button>Return Home</Button>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
