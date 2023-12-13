import React from 'react'
import Navigation from '../Navigation';
import MainSection from '../MainSection';
import FeaturesSection from '../FeaturesSection';
import TabsSection from '../TabsSection';
import Panel3 from '../Panel3';
import DownloadSection from '../DownloadSection';
import FAQSection from '../FAQSection';
import FAQAccording from '../FAQAccording';
import Newsletter from '../Newsletter';
import Footer from '../Footer';

const MainContainer = () => {
    return (
        <div className=' overflow-x-hidden'>
            <Navigation />
            <MainSection />
            <FeaturesSection />
            <TabsSection />
            <Panel3 />
            <DownloadSection />
            <FAQSection />
            <FAQAccording />
            <Newsletter />
            <Footer />
        </div>
    )
}

export default MainContainer;