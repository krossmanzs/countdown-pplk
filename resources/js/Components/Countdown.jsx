import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/joy/CircularProgress';
import { useCountUp } from 'use-count-up';


const CountdownTimer = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
        let timeLeft = {};
        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    const maxValue = {
        days: 365, // As an example, adjust based on your use case
        hours: 24,
        minutes: 60,
        seconds: 60
    };


    return (
        <div className="flex flex-col justify-center items-center">
            <div className='grid grid-cols-2 md:grid-cols-4 justify-center gap-5'>
                {Object.keys(timeLeft).map(interval => (
                    <div className='flex flex-col justify-center items-center'>
                        <div className='flex-col justify-between bg-white/5 drop-shadow-2xl ring-1 ring-white/15 backdrop-blur-2xl w-24 h-24 md:w-36 md:h-36 rounded-2xl  '>
                            <div className='w-full h-[80%] flex justify-center items-center text-center rounded-t-2xl'>
                                <p className='text-white font-semibold text-3xl md:text-5xl'>{timeLeft[interval]}</p>
                            </div>
                            <div className='flex items-center w-full h-[20%] bg-white rounded-b-2xl'>
                                <p className='w-full text-center text-gray-500 font-light uppercase text-xs md:text-sm'>{interval}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountdownTimer;
