import React from 'react';
import logo from '../images/logo-bookmark.svg';

const Navigation = () => {
    return (
        <div className='mx-auto flex px-6 lg:px-20 py-12 flex-row items-center justify-between'>
            <div className='z-30'>
                <img id="logo" src={logo} alt='' />
            </div>
            <nav className='hidden md:flex flex-row space-x-10 items-center text-grayishBlue'>
                <a href='#features' className='uppercase tracking-widest hover:text-softRed'>Features</a>
                <a href='#download' className='uppercase tracking-widest hover:text-softRed'>Download</a>
                <a href='#faq' className='uppercase tracking-widest hover:text-softRed'>FAQ</a>
                <button className='py-2 px-8 text-white bg-softRed border border-softRed rounded-lg 
                shadow-md uppercase hover:text-softRed hover:bg-white'>
                    Login
                </button>
            </nav>

        </div>
    )
}

export default Navigation;