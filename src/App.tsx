import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import Programs from './components/Programs/Programs';
import Support from './components/Support/Support';
import GetInvolved from './components/GetInvolved/GetInvolved';
import Blog from './components/Blog/Blog';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollTop/ScrollTop";
import Imprint from './components/Imprint/Imprint';
import Home from './components/Home/Home';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop />
            <NavBar />
            <div className="bg-gray-100 min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/get-involved" element={<GetInvolved />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/imprint" element={<Imprint />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
