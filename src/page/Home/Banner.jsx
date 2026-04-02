// import React from 'react'
import JBL from "../../assets/JBL.png"

// const Banner = () => {
    import React, { useEffect, useState } from "react";

const Banner = () => {
  // 👉 Set your target date here
  const targetDate = new Date("2026-04-05T00:00:00").getTime();

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    let time = {
      days: "00",
      hours: "00",
      minutes: "00",
      seconds: "00",
    };

    if (difference > 0) {
      time = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    }

    return time;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

    return (
        <div className='w-full h-[450px] bg-gradient-to-r from-[#3E2C23] to-[#FFFDEB] border '>
            <div className='max-w-7xl mx-auto p-12'>
                <div className='justify-between items-center ml-10 space-y-10 '>
                    <div className=' text-green-600 text-xl  '>
                        <h1>Categories</h1>

                    </div>
                    <div className='text-4xl text-white font-semibold space-y-3'>
                        <h1>Enhance Your</h1>
                        <h1>Music Experience</h1>
                    </div>
                    <div className="flex gap-4 mt-5">

                        <div className="w-16 h-16 rounded-full bg-white text-black flex flex-col items-center justify-center">

                            <p className="font-bold">23</p>
                            <h1 className="text-xs font-semibold">{timeLeft.hours}</h1>
                        </div>

                        <div className="w-16 h-16 rounded-full bg-white text-black flex flex-col items-center justify-center">

                            <p className="font-bold">05</p>
                            <h1 className="text-xs font-semibold">{timeLeft.days}</h1>
                        </div>

                        <div className="w-16 h-16 rounded-full bg-white text-black flex flex-col items-center justify-center">

                            <p className="font-bold">59</p>
                            <h1 className="text-xs font-semibold">{timeLeft.minutes}</h1>
                        </div>

                        <div className="w-16 h-16 rounded-full bg-white text-black flex flex-col items-center justify-center">

                            <p className="font-bold">35</p>
                            <h1 className="text-xs font-semibold">{timeLeft.seconds}</h1>
                        </div>

                    </div>
                    <div className="w-38 h-10 bg-green-500 text-white text-xl rounded text-center px-2 py-1 ">
                       <button >Buy Now!</button>
                    </div>
                </div>
                <div className='ml-[700px]'>
                    <img src={JBL} alt="let's go"
                        className='w-100 h-60 -mt-[300px]'
                    />
                </div>

            </div>

        </div>
    )
}

export default Banner
