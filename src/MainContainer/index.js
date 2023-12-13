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
import { HashRouter, Routes, Route } from 'react-router-dom';
import Panel1 from '../Panel1';
import Panel2 from '../Panel2';

const MainContainer = () => {
    return (
        <div className=' overflow-x-hidden'>
            <HashRouter>
            <Navigation />
            <MainSection />
            <FeaturesSection />
            <TabsSection />
            <Routes>
                <Route path="/" element={<Panel1 />} />
                <Route path="/panel2" element={<Panel2 />} />
                <Route path="/panel3" element={<Panel3 />} />
            </Routes>
           
            <DownloadSection />
            <FAQSection />
            <FAQAccording />
            <Newsletter />
            <Footer />
            </HashRouter>
        </div>
    )
}

export default MainContainer;