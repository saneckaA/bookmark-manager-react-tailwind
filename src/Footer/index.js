import React from 'react';
import logo from '../images/logo-bookmark-footer.svg';
import twitter from '../images/icon-twitter.svg';
import facebook from '../images/icon-facebook.svg';

const Footer = () => {
    return (
        <footer className='bg-veryDarkBlue py-20 px-10 md:py-12 md:px-32'>
            <div className='flex flex-col space-y-5 items-center md:flex-row md:justify-between
            md:space-y-0 '>
                <div className='flex flex-col space-y-8 items-center md:space-y-0 md:flex-row md:space-x-8'>
                    <img src={logo} />
                    <div className='flex flex-col items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8'>
                        <a href='#' className='text-grayishBlue uppercase hover:text-softRed'>Features</a>
                        <a href='#' className='text-grayishBlue uppercase hover:text-softRed'>Pricing</a>
                        <a href='#' className='text-grayishBlue uppercase hover:text-softRed'>Contact</a>
                    </div>
                </div>
                <div className='flex flex-row space-x-3 items-center pt-4 md:pt-0'>
                    <a href='#'><img src={facebook} className='ficon' /></a>
                    <a href='#'><img src={twitter}  className='ficon' /></a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;