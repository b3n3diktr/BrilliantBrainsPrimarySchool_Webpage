import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTiktok, FaFacebook } from 'react-icons/fa';
import Logo from "../../pictures/Logo.png";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-800 text-white py-10">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:text-left text-center">

                <div className="md:text-left text-center">
                    <a href="/home">
                        <img src="/images/Logo54181696849c1860afb9.png" alt="Logo" className="h-40 w-auto mx-auto md:mx-0" />
                    </a>
                    <p className="mt-4 text-gray-400">
                        Founded in 2016 to support vulnerable children acquire a quality education.
                    </p>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">Quick Links</h3>
                    <ul className="mt-4 space-y-2 text-gray-400">
                        <li><a className="hover:text-gray-200" href="/projects">Projects</a></li>
                        <li><a className="hover:text-gray-200" href="/sponsorship">Sponsorship</a></li>
                        <li><a className="hover:text-gray-200" href="/academics">Academics</a></li>
                        <li><a className="hover:text-gray-200" href="/about/staff">Staff</a></li>
                        <li><a className="hover:text-gray-200" href="/about/history">History</a></li>
                        <li><a className="hover:text-gray-200" href="/community">Community</a></li>
                        <li><a className="hover:text-gray-200" href="/volunteering">Volunteering</a></li>
                        <li><a className="hover:text-gray-200" href="/imprint">Imprint</a></li>
                        <li><a className="hover:text-gray-200" href="/privacy-policy">Privacy Policy</a></li>
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold">Follow Us</h3>
                    <div className="mt-4 flex justify-center md:justify-start space-x-4">
                        <a href="https://www.tiktok.com/@brilliantbrains24" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaTiktok size={24} />
                        </a>
                        <a href="https://www.instagram.com/brilliantbrains_school/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://web.facebook.com/profile.ph?id=100023067344744" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                            <FaFacebook size={24} />
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
