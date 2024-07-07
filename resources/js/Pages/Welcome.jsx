import CountdownTimer from '@/Components/Countdown';
import { Link, Head } from '@inertiajs/react';

import Button from '@/Components/Button';

export default function Welcome() {

    return (
        <>
            <Head title='PPLK ITERA 2024'/>

                <div className="flex flex-col bg-center text-white bg-[url('http://localhost:8000/images/Jumbotron.png')] bg-cover bg-no-repeat items-center justify-center w-screen h-screen">
                    <img className='w-20 h-20 md:w-28 md:h-28' src='https://avatars.githubusercontent.com/u/141564315'/>
                    <h1 className='font-black text-2xl md:text-6xl'>PPLK ITERA 2024</h1>
                    <p className='font-light text-md  md:text-2xl mb-10'>Coming Soon !</p>
                    <CountdownTimer targetDate="2024-08-12T00:00:00" />
                    <Button link="https://www.instagram.com/pplkitera/" text="Selengkapnya" />
                    <p style={{textShadow: "1px 1px 2px black"}} className='mt-10'>Reach us</p>
                    <div className='flex gap-3 mt-5'>
                        <a target='_blank' href='https://www.instagram.com/pplkitera/' className='bg-white/30 ring-1 ring-white/30 rounded-lg p-1.5 backdrop-blur-sm hover:text-[#E1306C] hover:bg-black/15 transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="currentColor"><path d="M176 32H80a48 48 0 0 0-48 48v96a48 48 0 0 0 48 48h96a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48m-48 136a40 40 0 1 1 40-40a40 40 0 0 1-40 40" opacity=".2" /><path d="M176 24H80a56.06 56.06 0 0 0-56 56v96a56.06 56.06 0 0 0 56 56h96a56.06 56.06 0 0 0 56-56V80a56.06 56.06 0 0 0-56-56m40 152a40 40 0 0 1-40 40H80a40 40 0 0 1-40-40V80a40 40 0 0 1 40-40h96a40 40 0 0 1 40 40Zm-88-96a48 48 0 1 0 48 48a48.05 48.05 0 0 0-48-48m0 80a32 32 0 1 1 32-32a32 32 0 0 1-32 32m64-84a12 12 0 1 1-12-12a12 12 0 0 1 12 12" /></g></svg>
                        </a>
                        <a target='_blank' href='https://www.tiktok.com/@pplkitera' className='bg-white/30 ring-1 ring-white/30 rounded-lg p-1.5 backdrop-blur-sm hover:text-black hover:bg-black/15 transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="currentColor"><path d="M224 120a95.55 95.55 0 0 1-56-18v54a68 68 0 0 1-136 0c0-33.46 24.17-62.33 56-68v42.69A28 28 0 1 0 128 156V24h40a56 56 0 0 0 56 56Z" opacity=".2" /><path d="M224 72a48.05 48.05 0 0 1-48-48a8 8 0 0 0-8-8h-40a8 8 0 0 0-8 8v132a20 20 0 1 1-28.57-18.08a8 8 0 0 0 4.57-7.23V88a8 8 0 0 0-9.4-7.88C50.91 86.48 24 119.1 24 156a76 76 0 0 0 152 0v-39.71A103.25 103.25 0 0 0 224 128a8 8 0 0 0 8-8V80a8 8 0 0 0-8-8m-8 39.64a87.2 87.2 0 0 1-43.33-16.15A8 8 0 0 0 160 102v54a60 60 0 0 1-120 0c0-25.9 16.64-49.13 40-57.6v27.67A36 36 0 1 0 136 156V32h24.5A64.14 64.14 0 0 0 216 87.5Z" /></g></svg>
                        </a>
                        <a target='_blank' href='https://www.youtube.com/@pplkitera413' className='bg-white/30 ring-1 ring-white/30 rounded-lg p-1.5 backdrop-blur-sm hover:text-red-600 hover:bg-black/15 transition-all'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 256 256"><g fill="currentColor"><path d="M226.59 71.53a16 16 0 0 0-9.63-11C183.48 47.65 128 48 128 48s-55.48-.35-89 12.58a16 16 0 0 0-9.63 11C27.07 80.54 24 98.09 24 128s3.07 47.46 5.41 56.47A16 16 0 0 0 39 195.42C72.52 208.35 128 208 128 208s55.48.35 89-12.58a16 16 0 0 0 9.63-10.95c2.34-9 5.41-26.56 5.41-56.47s-3.11-47.46-5.45-56.47M112 160V96l48 32Z" opacity=".2" /><path d="m164.44 121.34l-48-32A8 8 0 0 0 104 96v64a8 8 0 0 0 12.44 6.66l48-32a8 8 0 0 0 0-13.32M120 145.05V111l25.58 17Zm114.33-75.53a24 24 0 0 0-14.49-16.4C185.56 39.88 131 40 128 40s-57.56-.12-91.84 13.12a24 24 0 0 0-14.49 16.4C19.08 79.5 16 97.74 16 128s3.08 48.5 5.67 58.48a24 24 0 0 0 14.49 16.41C69 215.56 120.4 216 127.34 216h1.32c6.94 0 58.37-.44 91.18-13.11a24 24 0 0 0 14.49-16.41c2.59-10 5.67-28.22 5.67-58.48s-3.08-48.5-5.67-58.48m-15.49 113a8 8 0 0 1-4.77 5.49c-31.65 12.22-85.48 12-86.12 12s-54.37.18-86-12a8 8 0 0 1-4.77-5.49C34.8 173.39 32 156.57 32 128s2.8-45.39 5.16-54.47A8 8 0 0 1 41.93 68c31.65-12.18 85.47-12 86.12-12s54.37-.18 86 12a8 8 0 0 1 4.77 5.49C221.2 82.61 224 99.43 224 128s-2.8 45.39-5.16 54.47Z" /></g></svg>
                        </a>
                    </div>
                    <p className='font-thin text-sm md:text-md text-center leading-5 mt-3'>Developed by <span className='font-bold'>KARTATERA</span> PPLK ITERA 2024©<br/>All rights reserved</p>
                </div>
        </>
    );
}
