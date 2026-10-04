'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';



const Header = () => {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const date = now?.toLocaleDateString('bn-BD', {
    dateStyle: 'full',
    timeZone: 'Asia/Dhaka',
  });

  const time = now?.toLocaleTimeString('bn-BD', {
    timeZone: 'Asia/Dhaka',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
  });

  return (
    <header className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 px-4 py-3 md:relative md:flex-row md:justify-end mt-4">
      {/* Logo + Title - Center */}
      <div className="flex items-center gap-4 md:absolute md:left-1/2 md:-translate-x-1/2">
        <Image src="/logo.webp" alt="BBC News Bangla" height={50} width={50} />

        <div>
          <h2 className="text-2xl font-bold text-red-800">BBC News Bangla</h2>
          <p className="min-h-5 text-sm text-gray-600">
            {date} {time && `| ${time}`}
          </p>
        </div>
      </div>

      {/* Buttons - Right */}
      <div className="flex items-center gap-3">
        <button className="btn btn-outline rounded-2xl">সাইন ইন</button>
        <button className=" bg-red-800 btn btn-error rounded-2xl text-white">
          সাইন আপ
        </button>
      </div>
    </header>
  );
};

export default Header;
