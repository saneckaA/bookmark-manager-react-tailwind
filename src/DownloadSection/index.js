import React from 'react';
import chrome from '../images/logo-chrome.svg';
import firefox from '../images/logo-firefox.svg';
import opera from '../images/logo-opera.svg';

const DownloadSection = () => {
    return (
        <section id='download' className='py-32'>
            <div className=' flex flex-col space-y-5 px-10 mb-16 mx-auto items-center
            md:px-6 '>
                <h3 className='text-3xl font-bold text-center'>Download the extension</h3>
                <p className='text-grayishBlue max-w-lg text-center pb-10'>
                    We've got more browsers in the pipeline. Please do let us know if you've got
                    a favourite you'd like us to prioritize.
                </p>
                
                <div className='relative flex flex-col items-center max-w-5xl mx-auto space-y-10 md:px-0
                 md:space-y-0 md:space-x-7 md:flex-row'>
                    <div className='flex flex-col md:w-full py-6 space-y-4 text-center rounded-lg shadow-lg'>
                        <div className=' flex justify-center'>
                            <img src={chrome} alt='' className='w-16' />
                        </div>
                        <h5 className='pt-6 text-xl font-bold'>Add to Chrome</h5>
                        <p className='text-gray-400'>Minimum Version 62</p>
                        <div className='w-full bg-dots bg-repeat-x px-6 pt-6 capitalize'></div>
                        <div className='flex justify-center px-6'>
                            <button className='px py-3 text-white text-sm duration-200 border
                        rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue'>
                                Add & Install Extension
                            </button>
                        </div>
                    </div>
                    <div className='relative -bottom-8 flex flex-col w-full  py-6 space-y-4 text-center rounded-lg shadow-lg'>
                        <div className=' flex justify-center'>
                            <img src={chrome} alt='' className='w-16' />
                        </div>
                        <h5 className='pt-6 text-xl font-bold'>Add to Chrome</h5>
                        <p className='text-gray-400'>Minimum Version 62</p>
                        <div className='w-full bg-dots bg-repeat-x px-6 pt-6 capitalize'></div>
                        <div className='flex justify-center px-6'>
                            <button className='px py-3 text-white text-sm duration-200 border border-softBlue
                        rounded-lg bg-softBlue hover:text-softBlue hover:bg-white '>
                                Add & Install Extension
                            </button>
                        </div>
                    </div>
                    <div className='relative -bottom-16 flex flex-col w-full  py-6 space-y-4 text-center rounded-lg shadow-lg'>
                        <div className=' flex justify-center'>
                            <img src={chrome} alt='' className='w-16' />
                        </div>
                        <h5 className='pt-6 text-xl font-bold'>Add to Chrome</h5>
                        <p className='text-gray-400'>Minimum Version 62</p>
                        <div className='w-full bg-dots bg-repeat-x px-6 pt-6 capitalize'></div>
                        <div className='flex justify-center px-6'>
                            <button className='px py-3 text-white text-sm duration-200 border
                        rounded-lg bg-softBlue hover:text-softBlue hover:bg-white border-softBlue'>
                                Add & Install Extension
                            </button>
                        </div>
                    </div>
                



                </div>
            </div>
        </section>
    )
}

export default DownloadSection;