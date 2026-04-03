import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Policy from './Pages/Policy';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Services from './Pages/Services.jsx';
import Career from './Pages/Career';
import Blogs from './Pages/Blogs';
import Error404 from './Pages/Error404';

const RoutingApp = () => {
    return (
        
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/career" element={<Career />} />
        <Route path="/blogs" element={<Blogs />} />

        <Route path="*" element={<Error404 />} />
    </Routes>
    </BrowserRouter>
    
     );
};
 
export default RoutingApp;