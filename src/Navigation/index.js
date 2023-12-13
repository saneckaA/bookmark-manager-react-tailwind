import React, { useState } from 'react';
import logo from '../images/logo-bookmark.svg';
import logoMenu from '../images/logo-bookmark-footer.svg';

const Navigation = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen)

     
    };
    return (
        <div className='mx-auto flex px-6 lg:px-20 py-12 flex-row items-center justify-between'>
            <div className='z-30'>
                <img id="logo" src={isOpen ? logoMenu : logo} alt='' />
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
            <div className='md:hidden'>
                <button id="menu-btn" type='button' onClick={toggleMenu} className={`${isOpen ? 'open' : ""} z-40 block hamburger md:hidden focus:outline-none`} >
                    <span className='hamburger-top'></span>
                    <span className='hamburger-middle'></span>
                    <span className='hamburger-bottom'></span>
                </button>
            </div>
            <div id="menu" className={`fixed inset-0 z-20 flex flex-col items-center self-end 
            w-full h-full m-h-screen px-6 py-1 pt-24 pb-0 tracking-widest text-white uppercase
            divide-y divide-gray-500 opacity-90 bg-veryDarkBlue ${isOpen ? 'flex' : 'hidden'}`}>
                <div className='w-full py-3 text-center'>
                    <a href='#features' className='block hover:text-softRed'>Features</a>
                </div>
                <div className='w-full py-3 text-center'>
                    <a href='#download' className='block hover:text-softRed'>Download</a>
                </div>
                <div className='w-full py-3 text-center'>
                    <a href='#faq' className='block hover:text-softRed'>FAQ</a>
                </div>
                <div className='w-full py-3 text-center'>
                    <a href='#' className='block hover:text-softRed'>Login</a>
                </div>
               
            </div>

        </div>
    )
}

export default Navigation;