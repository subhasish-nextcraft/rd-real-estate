import { ReactNode } from 'react';
import toast from 'react-hot-toast';
import Button from 'ui/Button';

export default function FancyNotify({ View }: { View: ReactNode }) {
  return toast(
    // eslint-disable-next-line react/no-unstable-nested-components
    (t) => (
      <div className="flex flex-col gap-4 items-center font-medium">
        {View}
        <div>
          <Button
            className="!bg-white"
            onClick={() => toast.dismiss(t.id)}
          >
            close
          </Button>
        </div>
      </div>
    ),
    {
      duration: 1200000,
      style: {
        color: '#fff',
        background: '#0057A1',
        fontWeight: 500,
      },
    },
  );
}
