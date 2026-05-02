import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import HomeAR from './Pages/HomeAR.jsx';
import Policy from './Pages/Policy.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';
import Services from './Pages/Services.jsx';
import Demo from './Pages/Demo.jsx';
import Download from './Pages/Download.jsx';
import Career from './Pages/Career.jsx';
import JobDesc from './Pages/JobDesc.jsx';
import JobApp from './Pages/JobApp.jsx';
import Blogs from './Pages/Blogs.jsx';
import Error404 from './Pages/Error404.jsx';

const RoutingApp = () => {
    return (
        
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AR" element={<HomeAR />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/Demo" element={<Demo />} />
        <Route path="/Download" element={<Download />} />
        <Route path="/career" element={<Career />} />
        <Route path="/JobDesc" element={<JobDesc />} />
        <Route path="/JobApp" element={<JobApp />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="*" element={<Error404 />} />
    </Routes>
    </BrowserRouter>
    
     );
};
 
export default RoutingApp;