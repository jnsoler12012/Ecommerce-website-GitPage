import React from 'react'

export default function () {
    return (
        <section className='px-4 1g:px-14 w-[100vw] mx-auto bg-neutralSilver py-16' id='newsletter'>
            <div className='flex items-center justify-center lg:w-2/5 mx-auto'>
                <div className='text-center'>
                    <h2 className="1g:text-6xl text-5xl text-neutral-800 font-semibold mb-6 lg:leading-snug"> Get in contact for more information
                    </h2>
                    <div className='flex items-center justify-center gap-8'>
                        <button className='flex content-center items-center justify-center btn-primary text-white'><p className='mr-[9px]'>Let's talk</p><svg xmlns="http://www.w3.org/2000/ svg" width="14" height="8" viewBox="0 0 14 8" fill="none" className='inline-block m1-2'> <path d="M10.2503 7.00012L12.7201 4.53039C13.013 4.23749 13.013 3.7626 12.7201 3.4697L10.2503 0.999966M12.5004 4.00004L1.50012 4.00004" stroke="white" />
                        </svg></button>
                    </div>
                </div>
            </div>
        </section>
    );
};