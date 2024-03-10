import Link from 'next/link';
import Pic from 'util/Pic';

const navLinks = [
  { route: '/privacy-policy', label: 'Privacy Policy' },
  { route: '/security-policy', label: 'Security Policy' },
  { route: '/terms', label: 'Terms of Service' },
  { route: '/grievance-redressal', label: 'Grievance Redressal' },
  { route: '/disclaimers', label: 'Disclaimers' },
];

export default function Footer() {
  return (
    <div className="bg-pry-800 text-white py-14">
      <div className="max-w-7xl mx-auto h-full">
        <div className="container mx-auto flex flex-col-reverse sm:flex-row justify-between gap-8 items-center h-full px-4">
          <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col gap-8">
            <div className="flex flex-wrap mt-10 gap-4 items-center">
              {['facebook', 'instagram', 'linkedin', 'twitter', 'youtube'].map(
                (item) => (
                  <div className="h-10 w-10">
                    <Pic src={`/global/social/${item}.svg`} alt="" />
                  </div>
                ),
              )}
            </div>
            <Link href="/">
              <div className="flex gap-1 sm:gap-2 items-center">
                <div className="relative rounded-full overflow-hidden flex-none bg-white">
                  <img className="size-6 sm:size-7" src="/global/logo.svg" alt="" />
                </div>
                <img
                  src="/global/logo-text-white.svg"
                  alt="logo"
                  className="h-6 sm:h-7 mt-1"
                />
              </div>
            </Link>
          </div>

          <div className="w-full sm:w-1/2 lg:w-2/3 sm:max-w-max sm:mx-auto">
            <p className="subheader !text-white mb-6">Useful Links</p>
            <div className="gap-4 flex flex-col">
              {navLinks.map((item) => (
                <Link
                  key={item.route}
                  className="text-lg text-white hover:underline underline-offset-2"
                  href={item.route}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
