import React from 'react';
import illustration from '../images/illustration-features-tab-3.svg';

const Panel3 = () => {
    return (
        <section id='panel3' className='mx-auto'>
            <div className='flex flex-col py-5 px-6 md:flex-row md:space-x-7 panel-1'>
                <div className='flex justify-center md:w-1/2'>
                    <img src={illustration} className='relative z-10' />
                </div>
                <div className='flex flex-col space-y-8 items-center md:items-start md:w-1/2'>
                    <h3 className='mt-10 text-3xl font-semibold text-center md:mt-0 md:text-left'>
                        Share your bookmarks
                    </h3>
                    <p className='max-w-md text-center text-grayishBlue md:text-left'>
                        Easily share your bookmarks and collections with others. Create a shareable link
                        that you can send at the click of a button.
                    </p>
                    <div>
                        <a href='#' className='px-6 py-3 mt-4 font-semibold text-white border-2 border-white
                    rounded-lg md:inline-flex bg-softBlue hover:bg-white hover:text-softBlue
                    hover:border-softBlue hover:border-2'>
                            More Info
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Panel3;