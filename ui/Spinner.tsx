type SpinnerProps = {
  clear?: boolean;
  error?: boolean;
  secondary?: boolean;
};

function Spinner({ clear, error, secondary }: SpinnerProps) {
  let textClass: string;

  if (clear) {
    if (error) {
      textClass = 'text-red-700 hover:text-red-800 active:text-red-900';
    } else if (secondary) {
      textClass = 'text-slate-700 hover:text-slate-800 active:text-slate-900';
    } else {
      textClass = 'text-pry-700 hover:text-pry-800 active:text-pry-900';
    }
  } else {
    textClass = 'text-white';
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="800px"
      height="800px"
      viewBox="0 0 24 24"
      className={`h-7 w-7 stroke-current animate-spin ${textClass} rounded-full`}
      fill="none"
    >
      <path
        d="M20.0001 12C20.0001 13.3811 19.6425 14.7386 18.9623 15.9405C18.282 17.1424 17.3022 18.1477 16.1182 18.8587C14.9341 19.5696 13.5862 19.9619 12.2056 19.9974C10.825 20.0328 9.45873 19.7103 8.23975 19.0612"
        strokeWidth="3.55556"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default Spinner;
