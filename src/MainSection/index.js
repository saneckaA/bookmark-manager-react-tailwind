import React from 'react';
import illustration from '../images/illustration-hero.svg';

const MainSection = () => {
    return (
        <section id='main'>
            <div className='mx-auto flex flex-col-reverse space-y-6 lg:flex-row lg:space-y-0 lg:space-x-10 
            lg:px-6 py-16 lg:mb-16'>
                <div className='flex flex-col space-y-10 items-center lg:items-start lg:w-1/2'>
                    <h1 className='max-w-md text-3xl lg:text-4xl font-semibold text-center lg:text-left'>
                        A Simple Bookmark Manager
                    </h1>
                    <p className='max-w-md md:max-w-sm text-lg lg:max-w-lg text-grayishBlue text-center lg:text-left lg:text-2xl'>
                        A clean and simple interface to organize your favourite websites. Open a new browser tab
                        and see your sites load instantly. Try it for free.
                    </p>
                    <div className='flex flex-row space-x-4 items-center justify-center lg:justify-start w-full '>
                        <button className='text-white font-semibold text-sm border-2 border-softBlue bg-softBlue p-3 
                        rounded-md shadow-md md:text-base hover:bg-white hover:text-softBlue'>
                            Get It On Chrome
                        </button>
                        <button className='font-semibold text-sm border-2 border-gray-300 bg-gray-300 p-3 
                        rounded-md shadow-md md:text-base hover:bg-white hover:text-600'>
                            Get It On Firefox
                        </button>
                    </div>
                </div>
                <div className='relative mx-auto  '>
                    <div className='bgMain'>
                        <img src={illustration} className='lg:w-[556px] relative z-10 lg:right-28 lg:-top-36 xl:top-0 ' />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default MainSection;