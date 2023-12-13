import React from 'react'

const Newsletter = () => {
    return (
        <section id='newsletter' className='bg-softBlue'>
            <div className='mx-auto max-w-3xl py-24 px-6'>
                <p className='tracking-widest text-white text-lg uppercase 
                text-center'>
                    35,000+ Already Joined
                </p>
                <h2 className='text-white font-semibold text-3xl md:text-4xl text-center pt-4'>
                    Stay-up-to-date with what we're doing
                </h2>
                <form className='flex flex-col items-center max-w-2xl justify-center space-y-2 pt-4
                md:flex-row md:space-y-0 md:space-x-4'>
                    <input placeholder='Enter your email address' 
                    className='px-3 py-2 bg-white rounded-md' />
                    <button className='bg-softRed text-white py-2 px-3 rounded-md outline-none
                    hover:bg-white hover:text-softRed border border-softRed'>Contact Us</button>
                </form>
            </div>
        </section>
    )
}

export default Newsletter;