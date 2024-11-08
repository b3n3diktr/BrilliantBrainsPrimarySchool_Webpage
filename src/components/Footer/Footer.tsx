import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok } from 'react-icons/fa';
import Logo from "../../pictures/Logo.png";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:text-left text-center">

                {/* Logo and Description */}
                <div className="md:text-left text-center">
                    <Link to="/home">
                        <img src={Logo} alt="Logo" className="h-40 w-auto mx-auto md:mx-0" />
                    </Link>
                    <p className="mt-4 text-gray-400">
                        Founded in 2016 to support vulnerable children acquire a quality
                        education.
                    </p>
                </div>

                {/* Navigation Links */}
                <div>
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <ul className="mt-4 space-y-2 text-gray-400">
                        <li><Link to="/programs" className="hover:text-gray-200">Programs</Link></li>
                        <li><Link to="/support" className="hover:text-gray-200">Support Us</Link></li>
                        <li><Link to="/get-involved" className="hover:text-gray-200">Get Involved</Link></li>
                        <li><Link to="/about" className="hover:text-gray-200">About</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-200">Contact</Link></li>
                        <li><Link to="/imprint" className="hover:text-gray-200">Imprint</Link></li>
                        <li><Link to="/privacy-policy" className="hover:text-gray-200">Privacy Policy</Link></li>
                    </ul>
                </div>

                {/* Social Media Links */}
                <div>
                    <h3 className="text-xl font-semibold">Follow Us</h3>
                    <div className="mt-4 flex justify-center md:justify-start space-x-4">
                        <a href="https://www.tiktok.com/@brilliantbrains24" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaTiktok size={24} />
                        </a>
                        <a href="https://www.instagram.com/brilliantbrains_school/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-500 text-sm">
                <p>© 2024 Brilliant Brains Primary and Nursery School. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
