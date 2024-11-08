import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import React from 'react';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import Academics from './components/Academics/Academics';
import About from './components/About/About';
import Community from './components/Community/Community';
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollTop/ScrollTop";
import Imprint from './components/Imprint/Imprint';
import Home from './components/Home/Home';
import PrivacyPolicy from './components/PrivacyPolicy/PrivacyPolicy';
import Staff from './components/About/Staff/Staff';
import History from "./components/About/History/History";
import Projects from "./components/About/Projects/Projects";
import Sponsorship from "./components/Sponsorship/Sponsorship";

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop />
            <NavBar />
            <div className="bg-gray-100 min-h-screen">
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/sponsorship" element={<Sponsorship />} />
                    <Route path="/academics" element={<Academics />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/community" element={<Community />} />
                    <Route path="/imprint" element={<Imprint />} />
                    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                    <Route path="/about/staff" element={<Staff />} />
                    <Route path="/about/history" element={<History />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="*" element={<Home />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
