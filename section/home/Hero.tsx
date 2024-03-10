'use client';

import { useState } from 'react';
import Button from 'ui/Button';
import Dropdown from 'ui/Dropdown';
import Input from 'ui/Input';
import Pic from 'util/Pic';

const tabOptions = ['All', 'For Sale', 'For Rent'];

const types = [
  { label: 'BHK Type' },
  { label: 'Business' },
  {
    label: 'Marketing',
  },
  {
    label: 'Optimization',
  },
  {
    label: 'Technology',
  },
  {
    label: 'UX Design',
  },
];

const FilterOptions = types.map((item) => (
  <div className="block py-2 px-4 cursor-pointer hover:bg-slate-200 font-medium">
    {item.label}
  </div>
));

export default function Hero() {
  const [activeTab, setActiveTab] = useState(0);
  const [keyword, setKeyword] = useState('');
  // const [selectedLabel, setSelectedLabel] = useState('');
  const [selectedLabel] = useState('');

  return (
    <div className="relative">
      <div className="h-[22rem] sm:h-[28rem] xl:h-[30rem] w-full">
        <Pic src="/home/hero.png" alt="" objectFit="cover" />
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 -bottom-6 w-[95%] sm:w-auto">
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

        <div className="flex flex-col md:flex-row md:items-center gap-4 items-center w-full sm:w-[37rem] md:w-[45rem] lg:w-[60rem] xl:w-[75rem] p-[14px] bg-white rounded-tr-[7px] rounded-b-[7px] drop-shadow-[0px_4px_4px_rgba(0,0,0,0.25)]">
          <div className="w-full md:w-7/12 flex gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 md:gap-4 w-full">
              <div className="w-full sm:w-2/3">
                <Input
                  value={keyword}
                  onChange={(ev) => setKeyword(ev.target.value)}
                  placeholder="Enter a location or a keyword..."
                />
              </div>
              <div className="w-full sm:w-1/3">
                <Dropdown
                  full
                  label={
                    types.find((item) => item.label === selectedLabel)?.label
                    || 'All'
                  }
                  items={FilterOptions}
                />
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12 flex gap-4 items-center mx-auto max-w-max">
            <Button white>
              <div className="flex items-center gap-2">
                <img src="/home/filter.svg" alt="" className="h-6 w-6" />
                <p className="">Advanced</p>
              </div>
            </Button>
            <Button gradient>
              <div className="flex items-center gap-2">
                <img src="/home/magnifier.svg" alt="" className="h-5 w-5" />
                <p className="text-white">Search</p>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
