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

const App: React.FC = () => {
    return (
        <Router>
            <ScrollToTop />
            <NavBar />
            <DonateSection />
            <div className="bg-gray-100 min-h-screen">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/programs" element={<Programs />} />
                    <Route path="/support" element={<Support />} />
                    <Route path="/get-involved" element={<GetInvolved />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

const Home: React.FC = () => (
    <div className="text-center py-20">
        <h1 className="text-4xl font-bold">Welcome</h1>
        <p className="mt-4 text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores exercitationem maxime neque nulla obcaecati officia officiis quaerat sequi temporibus vel? Aliquid amet dolorum, fugit id iure laudantium libero quo veritatis!</p>
    </div>
);

const DonateSection: React.FC = () => {
    return (
        <div className="relative bg-gray-300 h-[500px] flex items-center justify-center text-center">
            <div className="absolute inset-0 bg-black opacity-40"></div>

            <div className="relative z-10">
                <h1 className="text-4xl font-bold text-white">
                    Help a child in Uganda <span className="text-yellow-400">REACH</span> for a better future.
                </h1>
                <button className="mt-8 px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600">
                    Sponsor A Student
                </button>
            </div>
        </div>
    );
};

export default App;
