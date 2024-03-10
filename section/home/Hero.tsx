'use client';

import { useState } from 'react';
import Input from 'ui/Input';
import Pic from 'util/Pic';

const tabOptions = ['All', 'For Sale', 'For Rent'];

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="relative">
      <div className="h-[22rem] sm:h-[28rem] xl:h-[30rem] w-full">
        <Pic src="/home/hero.png" alt="" objectFit="cover" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -bottom-4">
        <div className="flex rounded-t-[7px] max-w-max bg-white">
          {tabOptions.map((item, idx) => (
            <div className="relative" key={item}>
              <button
                onClick={() => setActiveTab(idx)}
                type="button"
                className="text-pryText px-6 py-4 font-semibold"
              >
                {item}
              </button>
              <div
                className={`absolute w-full bottom-0 ${
                  activeTab === idx
                    ? 'h-[5px] bg-[#85C1E5]'
                    : 'h-[1px] bg-[#7A7A7A]'
                }`}
              />
            </div>
          ))}
        </div>

        <div className="flex gap-4 items-center w-[72rem] p-[14px] bg-white rounded-[7px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <div className="w-full">
            <Input value="" placeholder="Enter a location or a keyword..." />
          </div>
        </div>
      </div>
    </div>
  );
}
