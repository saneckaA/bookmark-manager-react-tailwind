import React from 'react';
import { NavLink } from 'react-router-dom';

const TabsSection = () => {
    return (
        <section id='tabs'>
            <div className='relative mx-auto my-6 mt-12 px-6 lg:px-20'>
                <div className='bgTabs '></div>
                <div className='flex flex-col justify-center max-w-xl mx-auto mb-6 border-b 
                    md:space-x-10 md:flex-row'>
                    <div data-target="panel-1" className='flex justify-center text-center text-gray-600 border-b
                        md:border-b-0 hover:text-softRed md:w-1/3 tab'>
                        <NavLink to="/" data-target="panel-1" className='py-5' activeClassName='border-b border-softRed'>
                            Simple Bookmarking
                        </NavLink>
                    </div>
                    <div data-target="panel-2" className='flex justify-center text-center text-gray-600 border-b
                        md:border-b-0 hover:text-softRed md:w-1/3 tab ' >
                        <NavLink to="/panel2" data-target="panel-2" className='py-5' activeClassName='border-b border-softRed'>
                            Speedy Searching
                        </NavLink>
                    </div>
                    <div data-target="panel-3" className='flex justify-center text-center text-gray-600 border-b
                        md:border-b-0 hover:text-softRed md:w-1/3 tab'>
                        <NavLink to="/panel3" data-target="panel-3" className='py-5' activeClassName='border-b border-softRed'>
                            Easy Sharing
                        </NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TabsSection;