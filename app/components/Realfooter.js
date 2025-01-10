'use client'
import React, { useEffect, useState } from 'react'

const Realfooter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const formatDate = (date) => {
    const day = days[date.getDay()];
    const dateString = date.toLocaleDateString();
    const timeString = date.toLocaleTimeString();
    return `${day}, ${dateString} ${timeString}`;
  };

  return (
    <div className='fixed bottom-0  w-full h-[10vh] flex justify-between px-[1vw] items-center z-[-1] max-md:flex-col-reverse max-md:items-start'>
      <div className="">
        <p className='text-xs text-zinc-400'>2025 &copy; Edition</p>
        <h1 className='max-lg:text-xs'>{formatDate(currentTime)}</h1>
      </div>
      <div className="">
        <p className='text-xs text-zinc-400'>Socials</p>
        <div className="flex gap-[1vw]">
          {['Linkdin', 'Twitter', 'Instagram', 'Facebook'].map((item, index) => (
            <a key={index} href="" className='link cursor-pointer max-lg:text-xs'>{item}</a>
          ))}
        </div>
      </div>
    </div>
  )
}
export default Realfooter
