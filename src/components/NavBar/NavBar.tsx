import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from "../../pictures/Logo.png";

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className="sticky top-0 w-full z-50 bg-white shadow-md">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <div>
                    <img src={Logo} alt="Logo" className="h-16 w-auto mx-auto md:mx-0"/>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-gray-600">
                    <Link to="/programs" className="hover:text-gray-800">Programs</Link>
                    <Link to="/support" className="hover:text-gray-800">Support Us</Link>

                    <Link to="/blog" className="hover:text-gray-800">Blog</Link>
                    <Link to="/about" className="hover:text-gray-800">About</Link>
                    <Link to="/contact" className="hover:text-gray-800">Contact</Link>
                </div>

                {/* Mobile Menu */}
                <div className="flex items-center space-x-4">
                    <Link to="/get-involved" className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
                        Get Involved
                    </Link>
                    <button onClick={toggleMenu} className="md:hidden text-gray-800 focus:outline-none">
                        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {menuOpen && (
                <div className="md:hidden bg-gray-100 w-full shadow-md">
                    <ul className="flex flex-col items-center space-y-4 py-4">
                        <li><Link to="/programs" className="hover:text-gray-800" onClick={toggleMenu}>Programs</Link></li>
                        <li><Link to="/support" className="hover:text-gray-800" onClick={toggleMenu}>Support Us</Link></li>
                        <li><Link to="/get-involved" className="hover:text-gray-800" onClick={toggleMenu}>Get Involved</Link></li>
                        <li><Link to="/blog" className="hover:text-gray-800" onClick={toggleMenu}>Blog</Link></li>
                        <li><Link to="/about" className="hover:text-gray-800" onClick={toggleMenu}>About</Link></li>
                        <li><Link to="/contact" className="hover:text-gray-800" onClick={toggleMenu}>Contact</Link></li>
                    </ul>
                </div>
            )}
        </nav>
    );
};

export default NavBar;